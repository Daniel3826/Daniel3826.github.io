var forma = new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 1,  0,  1 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  0, -1 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  0, -1 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  0,  1 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  1,  0 ) ); // Vértice 4

forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5

forma.computeBoundingSphere();

forma.computeFaceNormals();
