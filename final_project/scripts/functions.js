function render() {
  stats.update();
  TWEEN.update();
  trackballControls.update();
  requestAnimationFrame(render);
  webGLRenderer.render(scene, camera);


  if (FPenabled === true) {
    computeFPControls();
    if(collisione) {detectCollision();}
  }

  if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
  {
    videoImageContext.drawImage( video, 0, 0, videoImage.width, videoImage.height );
    if ( videoTexture ) 
      videoTexture.needsUpdate = true;
  }

  // ******* Controllo video TV *********
  if (film.readyState === film.HAVE_ENOUGH_DATA) {
    if (isOn) {
      if (textureSW) textureSW.needsUpdate = true;
      film.play();
    } else {
      film.pause();
    }
  }
}

function createMesh(geom,rx, ry, imageFile, bump) {
  var texture = null;
  var texture_normal;

  switch(imageFile) {
    case 1:
    texture = tex_floor_camera;
    break;
    case 2:
    texture = tex_floor_bagno;
    break;
    case 3:
    texture = tex_floor_salone;
    break;
    case 4:
    texture = tex_floor_generico;
    break;
    case 5:
    texture = tex_wall_generico;
    break;
    case 6:
    texture = tex_wall_salone;
    break;
    case 7:
    texture = tex_wall_camera;
    break;
    case 8:
    texture = tex_wall_bagno;
    // texture_normal = tex_wall_bagno_normal;
    break;
    case 9:
    texture = tex_wall_cucina;
    // texture_normal = tex_wall_cucina_normal
    break;
    case 10:
    texture = tex_wall_esterno;
    texture_normal = tex_wall_esterno_normal
    // geom.computeVertexNormals();
    break;
    
  }
  
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
  texture.repeat.set( rx, ry ); 
  if (texture_normal!=undefined){
    
    var floorMaterial = new THREE.MeshPhongMaterial( { map: texture, side: THREE.DoubleSide, normalMap: texture_normal} ); 
    floorMaterial.normalScale.set(+1,+1);
    // console.log(imageFile, texture, texture_normal, floorMaterial);

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
  if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
    var vector = new THREE.Vector3(0, 0, 2);
    projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(vector,
      controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
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

function detectCollision() {
  var x=0, z=0;
  var vector;
  var projector2 = new THREE.Projector();
  // console.log(z,x);
  // console.log(controls.getMoveForward(), controls.getMoveBackward(), controls.getMoveLeft(), controls.getMoveRight());
  if (controls.getMoveLeft()) x =-1;
  if (controls.getMoveRight()) x = 1;
  if (controls.getMoveBackward()) z = -1;
  if (controls.getMoveForward()) z = 1;
  // console.log(z,x);
  vector = new THREE.Vector3( x, 0, z );

  // console.log(vector);
  projector2.unprojectVector(vector, camera);

  var rayCaster = new THREE.Raycaster(controls.getObject().position, vector.sub(controls.getObject().position).normalize());

  var intersects = rayCaster.intersectObjects(objects);
  console.log(intersects.length);

  if (intersects.length > 0 && intersects[0].distance < 10) {

    console.log(intersects[0].distance);

    controls.setFreeze(true);

  } else {controls.setFreeze(false)}
}