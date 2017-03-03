WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var renderizador = new THREE.WebGLRenderer({antialias: true});
renderizador.setSize(WIDTH,HEIGHT);
document.body.appendChild(renderizador.domElement);

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.6 ) * 15 + 50,
                     ( i - 5 ) * 4 ) );
}
var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
///////////////////////////////////////////////////////////////////////
var troncoForma = new THREE.CylinderGeometry(30, 75, 150);
var esferaForma = new THREE.SphereGeometry(40);
esferaForma.translate(0,150,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add(malla);
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera(65,(WIDTH / HEIGHT),0.1,10000);
camara.position.z = 700;
camara.position.y = 140;
camara.position.x = 99;


camara.lookAt(malla.position);

//malla.position.x=-200;
//malla.position.z=200;

arbolMalla.position.x=-200;
arbolMalla.position.z=200;

escena.add(camara);

renderizador.render( escena, camara );
