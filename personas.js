WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

lienzo.setSize(WIDTH,HEIGHT);

document.body.appendChild(lienzo.domElement);
var escena = new THREE.Scene;

var geometriaCubo1 = new THREE.CubeGeometry(50,90,50);
var geometriaCubo2 = new THREE.CubeGeometry(35,75,35);
var troncoForma = new THREE.CylinderGeometry( 30, 30, 30, 30 );
var esferaForma = new THREE.SphereGeometry( 30, 30, 30 );
esferaForma.translateY(0,1,0);

var aparienciaLila = new THREE.MeshLambertMaterial({color: 0x9999FF});
var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var cubo1 = new THREE.Mesh(geometriaCubo1, aparienciaLila);
var cubo2 = new THREE.Mesh(geometriaCubo2, aparienciaLila);

escena.add(cubo1);
escena.add(cubo2);
escena.add( arbolMalla);

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
	

