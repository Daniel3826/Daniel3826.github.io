//Figuras
var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);

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

base2Forma.translate(0,1,0);
troncoForma.translate(0,4,0);
cubierta1Forma.translate(0,8,0);
cubierta2Forma.translate(0,10,0);
pico1.translate(0,12,0);
pico2.translate(0,12,0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);
var toncoMalla= new THREE.Mesh(troncoForma);
var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
var pico1Malla= new THREE.Mesh(pico1);
var pico2Malla= new THREE.Mesh(pico2);

var torreForma = new THREE.Geometry();
torreForma.merge(base1Malla.geometry, base1Malla.matrix);
torreForma.merge(base2Malla.geometry, base2Malla.matrix);
torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
torreForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
torreForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
torreForma.merge(pico1Malla.geometry, pico1Malla.matrix);
torreForma.merge(pico2Malla.geometry, pico2Malla.matrix);
var material= new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);
var torreMalla1 = new THREE.Mesh(torreForma, material);
var torreMalla2 = new THREE.Mesh(torreForma, material);

torreMalla.rotateX(Math.PI/2);
torreMalla.translateY(3);

torreMalla1.rotateX(Math.PI/2);
torreMalla1.translateY(3);
torreMalla1.translateZ(-70);

torreMalla2.rotateX(Math.PI/2);
torreMalla2.translateY(3);
torreMalla2.translateZ(-70);
torreMalla2.translateX(70);

//Tablero
var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;
var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=50;
camara.position.x=160;
camara.position.y=40;
//camara.rotateY(1.365);
//camara.rotateX(Math.PI/4);
camara.lookAt(new THREE.Vector3(40,40,0));
camara.rotateZ(Math.PI/2);

var escena = new THREE.Scene();
var cubo= new Array();
var a=2;
for(var k=0; k<64; k++){
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      if(a==2){
        cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), new THREE.MeshBasicMaterial({color: 0xffffff}) );
        a=1;
      }else{
        cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), new THREE.MeshBasicMaterial({color: 0x999999}) );
        a=2;
      }
     cubo[k].position.x=j*10;
     cubo[k].position.y=i*10;
     escena.add(cubo[k]);
   }
   if(a==2){
        a=1;
      }else{
        a=2;
      }
  }
}
var base = new THREE.Mesh( new THREE.BoxGeometry(90, 90, 2), new THREE.MeshBasicMaterial({color: 0xCC6633}) );
base.position.x=35;
base.position.y=35;
base.position.z=-2;
escena.add(base);
escena.add(torreMalla);
escena.add(torreMalla1);
escena.add(torreMalla2);
escena.add(torreMalla3);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
