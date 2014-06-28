function render() {
        stats.update();
        TWEEN.update();
        trackballControls.update();
        requestAnimationFrame(render);
        webGLRenderer.render(scene, camera);

        // Pioggia
        if(rain){
          var vertices = particleSystem.geometry.vertices;
          vertices.forEach(function (v) {
            v.y = v.y - (v.velocityY);
            // v.x = v.x - (v.velocityX);

            if (v.y <= 0) v.y = Math.random() * 1000 - 500;

            // if (v.x <= -20 || v.x >= 20) v.velocityX = v.velocityX * -1;
          });
        }

        if(shower.grip.on){
          var gocce = streamShower.geometry.vertices;
          // console.log(gocce);
          gocce.forEach(function(v){
          v.z = v.z - (v.velocityZ);
          if(v.z <=0) v.z = 3.3;

          // console.log(v.z);

          });
        }


        if (FPenabled === true) {
          computeFPControls();
          if(collisione) {detectCollision();}
        }
        // **** Controllo WebCam ****
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
            if(FPenabled){
              film.update(controls.getObject());
            }
          } else {
            film.pause();  
         }
       }
     }

