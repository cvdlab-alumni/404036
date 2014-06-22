var controls;

  var objects = [];

  var rayMove;
  var rayPointer;

  var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

  if (havePointerLock) {
    var element = document.body;
    var pointerlockchange = function(event) {

      if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
        
        // FPenabled = true; //trackball?
        controls.enabled = true;
        // camera.position.set(0, 20, 0); //trackball?
        // controls.getObject().position.set(20, 0, -20);//trackball?
        $("#pointer").fadeIn(1000);
      } else {
       location.reload();;
      }
    }

    var pointerlockerror = function(event) {
      location.reload();
  }

  // Hook pointer lock state change events
  document.addEventListener('pointerlockchange', pointerlockchange, false);
  document.addEventListener('mozpointerlockchange', pointerlockchange, false);
  document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

  document.addEventListener('pointerlockerror', pointerlockerror, false);
  document.addEventListener('mozpointerlockerror', pointerlockerror, false);
  document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

  var startFPS = function() {
    trackballControls.reset();
    controls = new THREE.PointerLockControls(camera);
    scene.add(controls.getObject());

    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    if (/Firefox/i.test(navigator.userAgent)) {
      var fullscreenchange = function(event) {

        if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
          document.removeEventListener('fullscreenchange', fullscreenchange);
          document.removeEventListener('mozfullscreenchange', fullscreenchange);
          element.requestPointerLock();
        }
      }
      document.addEventListener('fullscreenchange', fullscreenchange, false);
      document.addEventListener('mozfullscreenchange', fullscreenchange, false);
      element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
      element.requestFullscreen();
    } else {
      element.requestPointerLock();
    }
  };
} else {
  instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
}