WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

lienzo.setSize(WIDTH,HEIGHT);

document.body.appendChild(lienzo.domElement);
var escena = new THREE.Scene;

var puntos = [];
for ( var i = 0; i < 50; i ++ ) 
{
    puntos.push( new THREE.Vector2(
                     Math.sin( i * 0.2 ) * 15 + 50,
                     ( i - 5 ) * 2 ) );
}

var geometriaCubo1 = new THREE.CubeGeometry(50,90,50);

var geometriaCono1 = new THREE.ConeGeometry( 5, 20, 32 );
var geometriaCono2 = new THREE.ConeGeometry( 5, 20, 32 );

var forma1 = new THREE.CylinderGeometry( 10, 20, 60, 32 );
var forma2 = new THREE.SphereGeometry( 28, 32, 32 );

var forma3 = new THREE.LatheGeometry(puntos);

var geometriaToro = new THREE.TorusGeometry( 25, 8, 8, 140 );

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
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );

var material3 = new THREE.MeshNormalMaterial();
var malla2 = new THREE.Mesh( forma3, material3 );
malla2.rotateX( Math.PI/6 );

var aparienciaLila = new THREE.MeshLambertMaterial({color: 0x9999FF});
var material1 = new THREE.MeshBasicMaterial( { color: 0x84422e } );
var material2 = new THREE.MeshBasicMaterial( { color: 0x4bb145 } );

var torus = new THREE.Mesh( geometriaToro, aparienciaLila);
torus.rotateX( Math.PI/2);

var cone = new THREE.Mesh( geometriaCono1, material );
var cone2 = new THREE.Mesh( geometriaCono2, material );
cone2.rotatex(Math.PI/2)

var cubo1 = new THREE.Mesh(geometriaCubo1, aparienciaLila);
var cilindro = new THREE.Mesh( forma1, material1 );
var esfera = new THREE.Mesh(forma2, material2 );
esfera.translateY(6);

escena.add(cubo1);
escena.add( esfera, cilindro );
escena.add(malla);
escena.add(malla2);
escena.add(torus);
escena.add(cone,cone2);

var camara = new THREE.PerspectiveCamera(45,(WIDTH / HEIGHT),0.1,10000);

camara.position.y = 160;
camara.position.z = 400;

camara.lookAt(cubo1.position);

cubo1.position.x = -90;
cone1.position.x = 150;
cone2.position.x = 150;
cilindro.position.x=220
esfera.position.x=220
esfera.position.y=45
malla2.position.x=-200
torus.position.x=220

escena.add(camara);

var luz1 = new THREE.PointLight(0xff0044);
luz1.position.set(120,260,100);

var luz2 = new THREE.PointLight(0x4499ff);
luz2.position.set(-100,100,200);

escena.add(luz1);
escena.add(luz2);

lienzo.render(escena, camara);
	

