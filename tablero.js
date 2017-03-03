var material1 = new THREE.MeshBasicMaterial( { color: 0xbbbbbb } );
var material2 = new THREE.MeshBasicMaterial( { color: 0x373737 } );
var material3 = new THREE.MeshBasicMaterial( { color: 0x642424 } );

var tablero = new Array(); 
for ( var XX = 0; XX < 8; XX ++ ){
for ( var ZZ = 0; ZZ < 8; ZZ ++ ){
	if(((XX%2)&&(!(ZZ%2)))||((!(XX%2))&&(ZZ%2))){
	tablero[(XX*8)+ZZ]= new THREE.Mesh( new THREE.BoxGeometry( 35, 1, 35), material1 );
	tablero[(XX*8)+ZZ].translateX(XX*35);
	tablero[(XX*8)+ZZ].translateZ(ZZ * 35);
	}
	else{
		tablero[(XX*8)+ZZ]= new THREE.Mesh( new THREE.BoxGeometry( 35, 1, 35), material2 );
		tablero[(XX*8)+ZZ].translateX(XX*35);
		tablero[(XX*8)+ZZ].translateZ(ZZ * 35);
	}
}}

var escena = new THREE.Scene();
// ,
for ( var l=0; l<64; l ++)
escena.add(  tablero [l] );

var mesita = new THREE.BoxGeometry( 300, 10, 300);
var MMesa = new THREE.Mesh(mesita, material3);
MMesa.translateX(125);
MMesa.translateZ(115);
MMesa.translateY(-10);
escena.add( MMesa );

escena.rotateX(Math.PI/4);
escena.rotateY(Math.PI/6);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 900;
camara.position.x = 35*3;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
