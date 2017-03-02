WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

lienzo.setSize(WIDTH,HEIGHT);

document.body.appendChild(lienzo.domElement);
var escena = new THREE.Scene;

var aparienciaLila = new THREE.MeshLambertMaterial({color: 0x9999FF});
var apariencia2= new THREE.MeshLambertMaterial({color: 0xF0D58C});
var apariencia3= new THREE.MeshLambertMaterial({color: 0xFFFFF0});

var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
var base3Forma = new THREE.CylinderGeometry(3,4,2,20,2,false);
var troncoForma = new THREE.CylinderGeometry(3,3,6,20,6,false);
var cubierta1Forma = new THREE.CylinderGeometry(4,3,2,20,2,false);
var cubierta2Forma = new THREE.CylinderGeometry(4,4,2,20,3,false);

var arco1 = new THREE.Shape();
arco1.moveTo(0, 0);
arco1.arc(0, 0, 4, .52, -.52, true);
arco1.lineTo(3.46, -2);
var pico1 = new THREE.ExtrudeGeometry( arco1, {amount: 1, bevelEnabled: false});
pico1.rotateX(Math.PI/2);

var arco2 = new THREE.Shape();
arco2.moveTo(0, 0);
arco2.arc(0, 0, 4, .52, -.52, true);
arco2.lineTo(3.46, -2);
var pico2 = new THREE.ExtrudeGeometry( arco2, {amount: 1, bevelEnabled: false});
pico2.rotateX(Math.PI/2);
pico2.rotateY(Math.PI/2);

var arco3 = new THREE.Shape();
arco3.moveTo(0, 0);
arco3.arc(0, 0, 4, .52, -.52, true);
arco3.lineTo(3.46, -2);
var pico3 = new THREE.ExtrudeGeometry( arco3, {amount: 1, bevelEnabled: false});
pico3.rotateX(Math.PI/2);
pico3.rotateY(Math.PI);

var arco4 = new THREE.Shape();
arco4.moveTo(0, 0);
arco4.arc(0, 0, 4, .52, -.52, true);
arco4.lineTo(3.46, -2);
var pico4 = new THREE.ExtrudeGeometry( arco4, {amount: 1, bevelEnabled: false});
pico4.rotateX(Math.PI/2);
pico4.rotateY(Math.PI*3/2);

base2Forma.translate(0,1,0);
base3Forma.translate(0,2,0);
troncoForma.translate(0,4,0);
cubierta1Forma.translate(0,8,0);
cubierta2Forma.translate(0,10,0);
pico1.translate(0,12,0);
pico2.translate(0,12,0);
pico3.translate(0,12,0);
pico4.translate(0,12,0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);
var base3Malla= new THREE.Mesh(base3Forma);
var toncoMalla= new THREE.Mesh(troncoForma);
var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
var pico1Malla= new THREE.Mesh(pico1);
var pico2Malla= new THREE.Mesh(pico2);
var pico3Malla= new THREE.Mesh(pico3);
var pico4Malla= new THREE.Mesh(pico4);

var torreForma = new THREE.Geometry();
torreForma.merge(base1Malla.geometry, base1Malla.matrix);
torreForma.merge(base2Malla.geometry, base2Malla.matrix);
torreForma.merge(base3Malla.geometry, base3Malla.matrix);
torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
torreForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
torreForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
torreForma.merge(pico1Malla.geometry, pico1Malla.matrix);
torreForma.merge(pico2Malla.geometry, pico2Malla.matrix);
torreForma.merge(pico3Malla.geometry, pico3Malla.matrix);
torreForma.merge(pico4Malla.geometry, pico4Malla.matrix);
var material= new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

torreMalla.rotateX(Math.PI/4);

var puntos = [];
for ( var i = 0; i < 38; i ++ ) 
{
    puntos.push( new THREE.Vector2(
                     Math.sin( i * 0.7 ) * 16 + 28,
                     ( i - 2 ) * 4 ) );
}


var geometriaCubo1 = new THREE.CubeGeometry(50,90,50);
var geometriaCubo2 = new THREE.CubeGeometry(50,90,50);

var geometriaCono1 = new THREE.ConeGeometry( 38, 50, 102 );
var geometriaCono2 = new THREE.ConeGeometry( 38, 50, 102 );
var geometriaCono3 = new THREE.ConeGeometry( 38, 50, 102 );
var geometriaCono4 = new THREE.ConeGeometry( 38, 50, 102 );

var forma1 = new THREE.CylinderGeometry( 10, 20, 60, 32 );
var forma2 = new THREE.SphereGeometry(26);
forma2.translate(0,40,0);
var forma1Malla = new THREE.Mesh(forma1);
var forma2Malla = new THREE.Mesh(forma2);
var forma3Malla = new THREE.Mesh(forma1);
var forma4Malla = new THREE.Mesh(forma2);

var monito = new THREE.Geometry();
var monito2 = new THREE.Geometry();

monito.merge(forma1Malla.geometry, forma1Malla.matrix);
monito.merge(forma2Malla.geometry, forma2Malla.matrix);
monito2.merge(forma3Malla.geometry, forma3Malla.matrix);
monito2.merge(forma4Malla.geometry, forma4Malla.matrix);

var monitoMalla = new THREE.Mesh(monito, aparienciaLila);
var monitoMalla2 = new THREE.Mesh(monito2, apariencia3);

var toro = new THREE.TorusGeometry( 30, 13, 20, 98 );
var toro2 = new THREE.TorusGeometry( 30, 13, 20, 98 );

var forma3 = new THREE.LatheGeometry(puntos);
var forma4 = new THREE.LatheGeometry(puntos);

var figura = new THREE.Shape();
figura.moveTo(10, 10);
figura.lineTo(40, 10);
figura.lineTo(50, -10);
figura.lineTo(60, 10);
figura.lineTo(90, 10);
figura.lineTo(80, 30);
figura.lineTo(90, 50);
figura.lineTo(60, 50);
figura.lineTo(50, 70);
figura.lineTo(40, 50);
figura.lineTo(10, 50);
figura.lineTo(20, 30);
figura.lineTo(10, 10);

var figura2 = new THREE.Shape();
figura2.moveTo(10, 10);
figura2.lineTo(40, 10);
figura2.lineTo(50, -10);
figura2.lineTo(60, 10);
figura2.lineTo(90, 10);
figura2.lineTo(80, 30);
figura2.lineTo(90, 50);
figura2.lineTo(60, 50);
figura2.lineTo(50, 70);
figura2.lineTo(40, 50);
figura2.lineTo(10, 50);
figura2.lineTo(20, 30);
figura2.lineTo(10, 10);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);
var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );
var malla = new THREE.Mesh( forma, aparienciaLila );
var forma2 = new THREE.ShapeGeometry(figura2);
var malla2 = new THREE.Mesh(forma2);
var forma2 = new THREE.ExtrudeGeometry( figura2,{amount: 10} );
var malla2 = new THREE.Mesh( forma2, apariencia3 );


var malla3 = new THREE.Mesh( forma3, aparienciaLila );
malla3.rotateX( Math.PI/8)
var malla4 = new THREE.Mesh( forma4, apariencia3 );
malla4.rotateX( Math.PI/8)

var cone1 = new THREE.Mesh( geometriaCono1, aparienciaLila );
var cone2 = new THREE.Mesh( geometriaCono2, aparienciaLila );
cone2.rotateX( Math.PI)
var cone3 = new THREE.Mesh( geometriaCono3, apariencia3 );
var cone4 = new THREE.Mesh( geometriaCono4, apariencia3 );
cone4.rotateX( Math.PI)

var cubo1 = new THREE.Mesh(geometriaCubo1, aparienciaLila);
var cubo2 = new THREE.Mesh(geometriaCubo2, apariencia3);

var torus = new THREE.Mesh( toro, apariencia2 );
torus.rotateX( Math.PI/2);
var torus2 = new THREE.Mesh( toro2, apariencia2 );
torus2.rotateX( Math.PI/2);

escena.add(cubo1);
escena.add(cubo2);

escena.add( monitoMalla );
escena.add( monitoMalla2 );

escena.add(malla);
escena.add(malla2);

escena.add(malla3);
escena.add(malla4);

escena.add(cone1, cone2);
escena.add(cone3, cone4);

escena.add(torus);
escena.add(torus2);

escena.add(torreMalla)

var camara = new THREE.PerspectiveCamera(110,(WIDTH / HEIGHT),0.5,10000);
camara.position.x = 290;
camara.position.y = 70;
camara.position.z = 520;

camara.lookAt(malla2.position);

malla.position.x=-20;
malla2.position.x=-20;
malla2.position.z=300;

torreMalla.position.x=-20;
torreMalla.position.z=-100;

cubo1.position.x = -90;
cubo2.position.x = -90;
cubo2.position.z = 300;

cone1.position.x = 150;
cone2.position.x = 150;
cone3.position.x = 150;
cone4.position.x = 150;
cone3.position.z = 300;
cone4.position.z = 300;

monitoMalla.position.x=250;
monitoMalla2.position.x=250;
monitoMalla2.position.z=300;

malla3.position.x=-200;
malla4.position.x=-200;
malla4.position.z=300;

torus.position.x=250;
torus2.position.x=250;
torus2.position.z=300;

escena.add(camara);

var luz1 = new THREE.PointLight(0xff0044);
luz1.position.set(120,260,100);

var luz2 = new THREE.PointLight(0x4499ff);
luz2.position.set(-100,100,200);

escena.add(luz1);
escena.add(luz2);

x=0;
init=true;
hover=true;
function renderizar(){
	if(!hover || init){
		init=false;
		requestAnimationFrame(renderizar);
		return false;
	}
	cubo1.rotation.y += Math.PI * 0.5 / 180;
	cubo1.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
	cubo2.rotation.y += Math.PI * 0.5 / 180;
	cubo2.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
	
	monitoMalla.rotation.y += Math.PI*2/200;
	monitoMalla2.rotation.y += Math.PI*2/200;
	
	cone1.rotation.x += Math.PI*0.5/180;
	cone2.rotation.x += Math.PI*0.5/180;
	cone3.rotation.x += Math.PI*0.5/180;
	cone4.rotation.x += Math.PI*0.5/180;
	
	malla3.rotation.y += Math.PI*2/200;
	malla4.rotation.y += Math.PI*2/200;
	
	
	lienzo.render(escena, camara);
	requestAnimationFrame(renderizar);
}
renderizar();
