// setup the control gui
var controlGUI = new function() {
  this.startFP = startFP;
  this.bumpScale = 0.0;
  this.normalScale = 0.0;
  this.updateBump = function (e) {
    frame_bump.children[0].material.bumpScale = e;
  }
  this.updateNormal = function(e) {
    frame_normal.children[0].material.normalScale.set(e,e);
  }
  this.collision = false;
  this.rain = false;

  this.cameraOriginale = true;
  this.saloneOriginale = true;
  this.stanzeOriginale = true;
  this.textureCamera = function(e){
    for (var i =0; i<apartment.camera.length;i++){
      if(e) { apartment.camera[i].material.map=texture_wall_camera; } 
      else { apartment.camera[i].material.map=texture_wall_camera2; }
    }
  };
  this.textureSalone = function(e){
    for (var i =0; i<apartment.salone.length;i++){
      if(e) { apartment.salone[i].material.map=texture_wall_salone; } 
      else { apartment.salone[i].material.map=texture_wall_salone2; }
    }
  };
  this.textureStanze = function(e){
    for (var i =0; i<apartment.stanza.length;i++){
      if(e) { apartment.stanza[i].material.map=texture_wall_generico; } 
      else { apartment.stanza[i].material.map=texture_wall_generico2; }
    }
  };
};

var gui = new dat.GUI();
gui.add(controlGUI, "startFP");
gui.add(controlGUI, "bumpScale", -2.0, 2.0).onChange(controlGUI.updateBump);
gui.add(controlGUI, "normalScale", -2.0, 2.0).onChange(controlGUI.updateNormal);
var textureFolder = gui.addFolder("textures");
textureFolder.add(controlGUI, "cameraOriginale").onChange(controlGUI.textureCamera);
textureFolder.add(controlGUI, "saloneOriginale").onChange(controlGUI.textureSalone);
textureFolder.add(controlGUI, "stanzeOriginale").onChange(controlGUI.textureStanze);

gui.add(controlGUI, "collision").onChange(function (e){
  collisione =e;
});
gui.add(controlGUI, "rain").onChange(function (e){
  if (e){
    rain=e;
    scene.add(particleSystem);
  } else {
    rain = e;
    scene.remove(particleSystem);
  }
});