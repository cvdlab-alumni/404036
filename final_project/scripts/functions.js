function render() {
  stats.update();
  // trackballControls.update();
  TWEEN.update();

  requestAnimationFrame(render);
  webGLRenderer.render(scene, camera);




  // Comandi per fps
  controls.isOnObject( false );        
  rayMove.ray.origin.copy( controls.getObject().position );
  var intersections = rayMove.intersectObjects( objects );
  if ( intersections.length > 0 ) {
    var distance = intersections[ 0 ].distance;
    if ( distance > 0 && distance < 10 ) {
      controls.isOnObject( true );
    }
  }
  controls.update();
}

function createMesh(geom,rx, ry, imageFile, bump) {
  // var texture = THREE.ImageUtils.loadTexture("" + imageFile)
  var texture = null;
  var texture_normal;

  if(imageFile===1) {
    texture = tex_floor_camera;
  } else if (imageFile===2){
    texture = tex_floor_bagno;
  } else if (imageFile===3){
    texture = tex_floor_salone;
  } else if (imageFile===4){
    texture = tex_floor_generico;
  } else if (imageFile===5){
    texture = tex_wall_generico;
  } else if (imageFile===6){
    texture = tex_wall_salone;
  } else if (imageFile===7){
    texture = tex_wall_camera;
  } else if (imageFile===8){
    texture = tex_wall_bagno;
  } else if (imageFile===9){
    texture = tex_wall_cucina;
    texture_normal = tex_wall_cucina_normal
    // console.log("carico la normal muro cucina");
  } else if (imageFile===10){
    texture = tex_wall_esterno;
    texture_normal = tex_wall_esterno_normal
  }

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
  texture.repeat.set( rx, ry ); 
  if (texture_normal!=undefined){
    var floorMaterial = new THREE.MeshPhongMaterial( { map: texture, side: THREE.DoubleSide, normalMap: texture_normal} ); 

  } else {
    var floorMaterial = new THREE.MeshPhongMaterial( { map: texture, side: THREE.DoubleSide} );
  }
  if (bump) {
    var bump = THREE.ImageUtils.loadTexture("" + bump)
    floorMaterial.bumpMap = bump;
    floorMaterial.bumpScale = 0.2;
  }
  var mesh = new THREE.Mesh(geom, floorMaterial);

  return mesh;
}

function onDocumentMouseDown(event) {
  event.preventDefault();

  // map viewport coordinates in ([-1,1], [-1,1], 0.5)
  // var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
  // projector.unprojectVector(vector, camera);
  // var raycaster = new THREE.Raycaster(camera.position, 
  // vector.sub(camera.position).normalize());
  // var intersects = raycaster.intersectObjects(toIntersect);
  // if (intersects.length > 0) {
  // intersects[ 0 ].object.interact && intersects[ 0 ].object.interact(); 
  // }


  var vector = new THREE.Vector3(0, 0, 0.5);
  projector.unprojectVector(vector, camera);
  var dir = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();
  var raycaster = new THREE.Raycaster(vector, dir);
  // scene.add(new THREE.ArrowHelper(raycaster.ray.direction, raycaster.ray.origin, 50, 0x000000));
  var intersects = raycaster.intersectObjects(toIntersect);
  if (intersects.length > 0) {
    intersects[ 0 ].object.interact && intersects[ 0 ].object.interact(); 
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

  var options = {amount: 0.01,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
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