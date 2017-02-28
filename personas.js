WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

lienzo.setSize(WIDTH,HEIGHT);

document.body.appendChild(lienzo.domElement);
var escena = new THREE.Scene;

var geometriaCubo1 = new THREE.CubeGeometry(50,90,50);
var geometriaCubo2 = new THREE.CubeGeometry(35,75,35);
var forma1 = new THREE.CylinderGeometry( 50, 50, 50, 50 );
var forma2 = new THREE.SphereGeometry( 60, 60, 60 );

var aparienciaLila = new THREE.MeshLambertMaterial({color: 0x9999FF});
var material1 = new THREE.MeshBasicMaterial( { color: 0x84422e } );
var material2 = new THREE.MeshBasicMaterial( { color: 0x4bb145 } );

var cubo1 = new THREE.Mesh(geometriaCubo1, aparienciaLila);
var cubo2 = new THREE.Mesh(geometriaCubo2, aparienciaLila);
var cilindro = new THREE.Mesh( forma1, material1 );
var esfera = new THREE.Mesh(forma2, material2 );
esfera.translateY(6);

escena.add(cubo1);
escena.add(cubo2);
escena.add( esfera, cilindro );

var camara = new THREE.PerspectiveCamera(45,(WIDTH / HEIGHT),0.1,10000);

camara.position.y = 160;
camara.position.z = 400;

camara.lookAt(cubo1.position);

cubo1.position.x = -100;
cubo2.position.x = 100;

escena.add(camara);

var luz1 = new THREE.PointLight(0xff0044);
luz1.position.set(120,260,100);

var luz2 = new THREE.PointLight(0x4499ff);
luz2.position.set(-100,100,200);

escena.add(luz1);
escena.add(luz2);

lienzo.render(escena, camara);
	

