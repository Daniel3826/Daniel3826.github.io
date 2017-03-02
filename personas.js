WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

lienzo.setSize(WIDTH,HEIGHT);

document.body.appendChild(lienzo.domElement);
var escena = new THREE.Scene;

var aparienciaLila = new THREE.MeshLambertMaterial({color: 0x9999FF});
var apariencia2= new THREE.MeshLambertMaterial({color: 0xF0D58C});
var apariencia3= new THREE.MeshLambertMaterial({color: 0x00FFFF});

var puntos = [];
for ( var i = 0; i < 38; i ++ ) 
{
    puntos.push( new THREE.Vector2(
                     Math.sin( i * 0.7 ) * 16 + 28,
                     ( i - 2 ) * 4 ) );
}

var puntos2 = [];
for ( var j = 0; j < 38; j ++ ) 
{
    puntos2.push( new THREE.Vector3(
                     Math.sin( j * 0.7 ) * 16 + 28,
                     ( j - 2 ) * 4 ) );
}

var geometriaCubo1 = new THREE.CubeGeometry(50,90,50);
var geometriaCubo2 = new THREE.CubeGeometry(50,90,50);

var geometriaCono1 = new THREE.ConeGeometry( 38, 50, 102 );
var geometriaCono2 = new THREE.ConeGeometry( 38, 50, 102 );

var forma1 = new THREE.CylinderGeometry( 10, 20, 60, 32 );
var forma2 = new THREE.SphereGeometry(26);
forma2.translate(0,40,0);
var forma1Malla = new THREE.Mesh(forma1);
var forma2Malla = new THREE.Mesh(forma2);

var monito = new THREE.Geometry();

monito.merge(forma1Malla.geometry, forma1Malla.matrix);
monito.merge(forma2Malla.geometry, forma2Malla.matrix);

var monitoMalla = new THREE.Mesh(monito, aparienciaLila);

var toro = new THREE.TorusGeometry( 30, 13, 20, 98 );

var forma3 = new THREE.LatheGeometry(puntos);
var forma4 = new THREE.LatheGeometry(puntos2);

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

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);
var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );
var malla = new THREE.Mesh( forma, aparienciaLila );

var malla3 = new THREE.Mesh( forma3, aparienciaLila );
malla3.rotateX( Math.PI/8)
var malla4 = new THREE.Mesh( forma4, apariencia3 );
malla4.rotateX( Math.PI/8)

var cone1 = new THREE.Mesh( geometriaCono1, aparienciaLila );
var cone2 = new THREE.Mesh( geometriaCono2, aparienciaLila );
cone2.rotateX( Math.PI)

var cubo1 = new THREE.Mesh(geometriaCubo1, aparienciaLila);
var cubo2 = new THREE.Mesh(geometriaCubo2, aparienciaLila);

var torus = new THREE.Mesh( toro, apariencia2 );
torus.rotateX( Math.PI/2);

escena.add(cubo1);
escena.add(cubo2);

escena.add( monitoMalla );

escena.add(malla);

escena.add(malla3);
escena.add(malla4);

escena.add(cone1, cone2);
escena.add(torus);

var camara = new THREE.PerspectiveCamera(102,(WIDTH / HEIGHT),0.2,10000);

camara.position.y = 200;
camara.position.z = 400;

camara.lookAt(cubo1.position);

malla.position.x=-20;

cubo1.position.x = -90;
cubo2.position.x = -90;
cubo2.position.z = 220;

cone1.position.x = 150;
cone2.position.x = 150;
monitoMalla.position.x=250;

malla3.position.x=-200;
malla4.position.x=-200;
malla4.position.z=220;

torus.position.x=250;

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
	
	monitoMalla.rotation.y += Math.PI*2/200;
	cone1.rotation.x += Math.PI*0.5/180;
	cone2.rotation.x += Math.PI*0.5/180;
	malla3.rotation.y += Math.PI*2/200;
	
	
	lienzo.render(escena, camara);
	requestAnimationFrame(renderizar);
}
renderizar();
