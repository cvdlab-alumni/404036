var mesh;
var apartment = new THREE.Object3D();

var plane = new THREE.Mesh(new THREE.BoxGeometry(1000,1000,1),new THREE.MeshLambertMaterial({color: 0x00ff00, side: THREE.DoubleSide}) );
scene.add(plane);
plane.rotation.x=Math.PI/2;
plane.position.set(0,-0.5,0);

objects.push(plane);
objects.push(apartment);


var loader = new THREE.OBJLoader();
loader.load('models/proj.obj', function (obj) {
    global_o = obj;
    var multiMaterial = [
    new THREE.MeshLambertMaterial({color: 0xEFEFEF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshBasicMaterial({wireframe: false, overdraw: false, color: 0xffffff, side: THREE.DoubleSide})
    ];

    mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);

    apartment.add(mesh);
  });

apartment = mk_all_doors(apartment);

apartment = mk_all_windows(apartment);

apartment = mk_all_floors(apartment);

apartment = mk_all_int_walls(apartment);

apartment = mk_all_ext_walls(apartment);

apartment.position.set(-123,0,108);
apartment.scale.set(10,10,10);
apartment.rotation.x=-Math.PI/2;
scene.add(apartment);