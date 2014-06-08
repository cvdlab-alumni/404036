var sColor=0x000000;
var cColor=0xC6E2FF;
// var tColor=0xE6E8FA;
var tColor=0x4d5bd7;
function mkJoint (radius, height) {
  var joint = new THREE.Object3D();
  var sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
  var sphereMaterial = new THREE.MeshPhongMaterial({color: sColor, shading: THREE.SmoothShading, shininess: 100, metal: true});
  sphereMaterial.side=THREE.DoubleSide;
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true;
  sphere.position.set(0, 0, 0);
  joint.add(sphere);

  var cylinderGeometry = new THREE.CylinderGeometry(radius/2, radius/2, height, 32, 32, false);
  var cylinderMaterial = new THREE.MeshPhongMaterial({color: cColor, shading: THREE.SmoothShading, shininess: 100, metal: true});
  cylinderMaterial.side=THREE.DoubleSide;
  
/*  var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder.position.set(0, (height / 2 + radius)-0.8, 1);
  cylinder.castShadow = true;
  sphere.add(cylinder);

  var cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder2.position.set(0, (height / 2 + radius)-0.8, -1);
  cylinder2.castShadow = true;
  sphere.add(cylinder2);

  var hook = new THREE.Object3D();
  hook.position.set(0, (height / 2 + radius)-0.8, -1);
  cylinder.add(hook);
  */
  var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder.position.set(0, height / 2 + radius, 0);
  cylinder.castShadow = true;
  sphere.add(cylinder);

  var hook = new THREE.Object3D();
  hook.position.set(0, height/2+radius, 0);
  cylinder.add(hook);

  joint.sphere = sphere;
  joint.cylinder = cylinder;
  joint.hook = hook;

  return joint;
}

function mkBulb (radius_bulb, radius_base, height_base){
  var bulb = new THREE.Object3D();

  var bulbGlassGeometry = new THREE.SphereGeometry(radius_bulb, 8, 8);
  var bulbGlassMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.3, transparent: true});
  var bulbGlass = new THREE.Mesh(bulbGlassGeometry, bulbGlassMaterial);

  var baseBulbGeometry = new THREE.CylinderGeometry((2/3)*radius_bulb, radius_base, height_base, 8, 8, false);
  var baseBulbMaterial = new THREE.MeshLambertMaterial({color: cColor, shading: THREE.SmoothShading});
  var baseBulb = new THREE.Mesh(baseBulbGeometry, baseBulbMaterial);
  bulb.add(bulbGlass);
  bulb.add(baseBulb);
  bulbGlass.position.set(0,radius_bulb,0);
  bulb.glass=bulbGlass;
  bulb.base=baseBulb;
  return bulb;
}
function createMesh(geom) {
  // var textTex = THREE.ImageUtils.loadTexture("wood-2.jpg");
  var meshMaterial = new THREE.MeshLambertMaterial({color: tColor, shading: THREE.SmoothShading, specular: 0xffffff, shininess: 1000, metal: true});
  // var meshMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, map: textTex});
  // var texture = THREE.ImageUtils.loadTexture("noir_027.jpg");
  // meshMaterial.map=texture;
  var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);
  plane.castShadow=true;
  plane.children[0].castShadow=true;
  plane.rotation.x=Math.PI/2;
  plane.rotation.y=-Math.PI/2;
  return plane;
}