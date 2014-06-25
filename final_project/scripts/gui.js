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
      };

      var gui = new dat.GUI();
      gui.add(controlGUI, "startFP");
      gui.add(controlGUI, "bumpScale", -2, 2).onChange(controlGUI.updateBump);
      gui.add(controlGUI, "normalScale", -2, 2).onChange(controlGUI.updateNormal);
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