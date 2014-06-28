// add spotlights
 

      // var d= new THREE.DirectionalLight(0xffffff);
      // d.position.set(0, 0, 50);
      // d.intensity = 0.5;
      // scene.add(d);
      
      var dir1 = new THREE.DirectionalLight(0xffffff);
      // dir1.position.set(50, 100, -50);
      dir1.position.set(50, 0, 0);
      dir1.intensity = 0.5;
      scene.add(dir1);

      var dir2 = new THREE.DirectionalLight(0xffffff);
      // dir2.position.set(-50, 100, 50);
      dir2.position.set(-50, 0, 0);
      dir2.intensity = 0.5;
      scene.add(dir2);

      var dir3 = new THREE.DirectionalLight(0xffffff);
      // dir3.position.set(50, 100, 50);
      dir3.position.set(0, 0, 50);
      dir3.intensity = 0.5;
      scene.add(dir3);

      var dir4 = new THREE.DirectionalLight(0xffffff);
      // dir4.position.set(-50, 100, -50);
      dir4.position.set(0, 0, -50);
      dir4.intensity = 0.5;
      scene.add(dir4);

      // Disimpegno
      // var light1 = mk_lamp_ceiling(0.3, 0x00FF00, 7);
      // apartment.add(light1);
      // light1.position.set(12.8,12.3,6);
      // light1.pointLight.position.set(0,0,0);
      // light1.spotLight.target=(light1.target);

      // // Ingresso
      // var light2 = mk_lamp_ceiling(0.3, 0x00FF00, 7);
      // apartment.add(light2);
      // light2.position.set(12.8,4.3,6);
      // light2.pointLight.position.set(0,0,0);
      // light2.spotLight.target=(light2.target);

      // //Corridoip
      // var light3 = mk_lamp_ceiling(0.3, 0x00FF00, 7);
      // apartment.add(light3);
      // light3.position.set(12.8,18.3,6);
      // light3.pointLight.position.set(0,0,0)
      // light3.spotLight.target=(light3.target);

      // //Camera
      // var light4 = mk_lamp_ceiling(0.3, 0x00FF00, 5);
      // apartment.add(light4);
      // light4.position.set(19.6,3.5,6);
      // light4.pointLight.position.set(0,0,0);
      // light4.spotLight.target=(light4.target);

      // //Bagno
      // var light5 = mk_lamp_ceiling(0.3, 0x00FF00, 7);
      // apartment.add(light5);
      // light5.position.set(20.8,9.3,6);
      // light5.pointLight.position.set(0,0,0);
      // light5.spotLight.target=(light5.target);


      // //Cucina
      // var light6 = mk_lamp_ceiling(0.3, 0x00FF00, 7);
      // apartment.add(light6);
      // light6.position.set(19.5,16.8,6);
      // light6.pointLight.position.set(0,0,0);
      // light6.spotLight.target=(light6.target);

      // // Salone
      // var light7 = mk_lamp_ceiling(0.3, 0x00FF00, 7);
      // apartment.add(light7);
      // light7.position.set(5,15.4,6);
      // light7.pointLight.position.set(0,0,0);
      // light7.spotLight.target=(light7.target);

      // var light8 = mk_lamp_ceiling(0.3, 0x00FF00, 7);
      // apartment.add(light8);
      // light8.position.set(5,6.2,6);
      // light8.pointLight.position.set(0,0,0);
      // light8.spotLight.target=(light8.target);
