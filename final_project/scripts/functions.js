function mk_Texture_Material(map, norm, norm_map, wrapping) {
  // console.log(map);
  var texture = THREE.ImageUtils.loadTexture(map);
  var material = new THREE.MeshPhongMaterial({
    map: texture,
  })
  if (norm) {
    var normal = THREE.ImageUtils.loadTexture(norm_map);
    material.normalMap = normal;
  }
  if (wrapping) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    if (norm) {
      normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
    }
  }
  return material;
}

function createMesh(geom,rx, ry, imageFile) {
  var mat;

  switch(imageFile) {
    case 1:
    mat = mat_floor_camera;
    break;
    case 2:
    mat = mat_floor_bagno;
    break;
    case 3:
    mat = mat_floor_salone;
    break;
    case 4:
    mat = mat_floor_generico;
    break;
    case 5:
    mat = mat_wall_generico;
    break;
    case 6:
    mat = mat_wall_salone;
    break;
    case 7:
    mat = mat_wall_camera;
    break;
    case 8:
    mat = mat_wall_bagno;
    geom.computeVertexNormals();
    break;
    case 9:
    mat = mat_wall_cucina;
    geom.computeVertexNormals();
    break;
    case 10:
    mat = mat_wall_esterno;
    geom.computeVertexNormals();
    break;
    
  }
  
  var mesh = new THREE.Mesh(geom, mat);

  return mesh;
}

function onDocumentMouseDown(event) {
  event.preventDefault();
  if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
    // var vector = new THREE.Vector3(0, 0, 2);
    // projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(controls.getObject().position, controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
  } else {
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(camera.position,
      vector.sub(camera.position).normalize());

  }
  // scene.add(new THREE.ArrowHelper(raycaster.ray.direction, raycaster.ray.origin, 10, 0x000000));
  var intersects = raycaster.intersectObjects(toIntersect);
  if (intersects.length > 0) {
    intersects[0].object.interact && intersects[0].object.interact();
  }
}

function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  $('body').append(stats.domElement);
  return stats;
}

function mk_plane(texture,rx,ry, b,h,list) {
  var i =0;

  var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
  var shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(b,0);
  shape.lineTo(b,h);
  shape.lineTo(0,h);

  if (list.length >0) {
    var hole;
    for (i=0;i<list.length;i=i+4){
      hole = new THREE.Path();
      hole.moveTo(list[i],list[i+1]);
      hole.lineTo(list[i]+list[i+2],list[i+1]);
      hole.lineTo(list[i]+list[i+2],list[i+1]+list[i+3]);
      hole.lineTo(list[i],list[i+1]+list[i+3]);
      hole.lineTo(list[i],list[i+1]);
      shape.holes.push(hole);
    }

  }
  var planeGeometry = new THREE.ExtrudeGeometry( shape, options );

  var plane = createMesh(planeGeometry,rx,ry,texture);
  return plane;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  webGLRenderer.setSize( window.innerWidth, window.innerHeight );
}

function animateFire( sF, rf){      
    var counter = 1;
    var singleFire = sF.geometry.vertices;
    // fire.geometry.verticesNeedUpdate = true;
    var alfa=0;
    singleFire.forEach(function(v){
      alfa += 2/50;
        if(counter%2===0){
          new TWEEN.Tween(v)
          .to({x:(rf*1.1 * Math.cos(alfa*2* Math.PI)), y: (rf*1.3 * Math.sin(alfa*2* Math.PI)), z: 1.575},200)
          .repeat(Infinity)
          .easing(TWEEN.Easing.Linear.None)
          .yoyo(true)
          .start();
        }
        counter++;
    });
  }

function createText(geom) {
  var meshMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.SmoothShading, specular: 0xffffff, shininess: 1000, metal: true});
  var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);
  // plane.rotation.x=Math.PI/2;
  // plane.rotation.y=-Math.PI/2;
  plane.rotation.y=Math.PI;
  return plane;
}