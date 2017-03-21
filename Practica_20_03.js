//Figuras
var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1);
var base3Forma = new THREE.CylinderGeometry(3,4,2,20,2);
var troncoForma = new THREE.CylinderGeometry(3,3,6,20,6);
var cubierta1Forma = new THREE.CylinderGeometry(4,3,2,20,2);
var cubierta2Forma = new THREE.CylinderGeometry(4,4,2,20,3);

var arco1 = new THREE.Shape();
arco1.moveTo(0, 0);
arco1.arc(0, 0, 4, .52, -.52);
arco1.lineTo(3.46, -2);
var pico1 = new THREE.ExtrudeGeometry( arco1, {amount: 1});
pico1.rotateX(Math.PI/2);

var arco2 = new THREE.Shape();
arco2.moveTo(0, 0);
arco2.arc(0, 0, 4, .52, -.52);
arco2.lineTo(3.46, -2);
var pico2 = new THREE.ExtrudeGeometry( arco2, {amount: 1});
pico2.rotateX(Math.PI/2);
pico2.rotateY(Math.PI/2);

var arco3 = new THREE.Shape();
arco3.moveTo(0, 0);
arco3.arc(0, 0, 4, .52, -.52);
arco3.lineTo(3.46, -2);
var pico3 = new THREE.ExtrudeGeometry( arco3, {amount: 1});
pico3.rotateX(Math.PI/2);
pico3.rotateY(Math.PI);

var arco4 = new THREE.Shape();
arco4.moveTo(0, 0);
arco4.arc(0, 0, 4, .52, -.52);
arco4.lineTo(3.46, -2);
var pico4 = new THREE.ExtrudeGeometry( arco4, {amount: 1});
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
var torreMalla1 = new THREE.Mesh(torreForma, material);

torreMalla.rotateX(Math.PI/2);
torreMalla.translateY(3);

torreMalla1.rotateX(Math.PI/2);
torreMalla1.translateY(3);
torreMalla1.translateZ(-70);

//Figuras2
var base4Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base5Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var tronco2Forma = new THREE.CylinderGeometry(1.5,3,7,7,7,false);
  var cabeza2Forma = new THREE.SphereGeometry(2);

  base5Forma.translate(0,1,0);
  tronco2Forma.translate(0,5,0);
  cabeza2Forma.translate(0,9.5,0);

  var base4Malla = new THREE.Mesh(base4Forma);
  var base5Malla= new THREE.Mesh(base5Forma);
  var tronco2Malla= new THREE.Mesh(tronco2Forma);
  var cabeza2Malla= new THREE.Mesh(cabeza2Forma);

  var peonForma = new THREE.Geometry();
  peonForma.merge(base4Malla.geometry, base4Malla.matrix);
  peonForma.merge(base5Malla.geometry, base5Malla.matrix);
  peonForma.merge(tronco2Malla.geometry, tronco2Malla.matrix);
  peonForma.merge(cabeza2Malla.geometry, cabeza2Malla.matrix);
  peonMalla = new THREE.Mesh(peonForma, material);
  peonMalla1 = new THREE.Mesh(peonForma, material);
  
  peonMalla.rotateX(Math.PI/2);
  peonMalla.translateY(3);
  peonMalla.translateZ(-10);
  
  peonMalla1.rotateX(Math.PI/2);
  peonMalla1.translateY(3);
  peonMalla1.translateZ(-60);

//Tablero
var camara = new THREE.OrthographicCamera();
camara.left=window.innerWidth/-2;
camara.right=window.innerWidth/-2;
camara.top=window.innerHeight/6;
camara.bottom=window.innerHeight/-2;
camara.near=1;
camara.far=100;
camara.updateProjectionMatrix();

camara.position.z=100;
camara.position.z=50;
camara.position.x=160;
camara.position.y=40;
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
escena.add(peonMalla);
escena.add(peonMalla1);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
