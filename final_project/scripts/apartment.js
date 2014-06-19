var mesh;
      var apartment = new THREE.Object3D();

      var loader = new THREE.OBJLoader();
      loader.load('models/proj.obj', function (obj) {

        global_o = obj;

        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0xaaaaaa, side: THREE.DoubleSide, shading: THREE.FlatShading}),
          new THREE.MeshBasicMaterial({wireframe: false, overdraw: false, color: 0xffffff, side: THREE.DoubleSide})
          ];

        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
          
        apartment.add(mesh);
        // scene.children[1].scale.x = 10;scene.children[1].scale.y = 10;scene.children[1].scale.z = 10;
      });

      // Inserimento porte 
      apartment.position.set(-12.3,-10.8,0)
      var door = mk_blind(3.4,4.4,0.3);
      apartment.add(door);
      door.position.set(11,0.3,3);

      var door1=mk_door(1.6,4.2,0.15);
      apartment.add(door1);
      door1.position.set(11.9,7.55,2.9);

      var door2=mk_door(1.6,4.2,0.15);
      door2.rotation.z=Math.PI/2;
      apartment.add(door2);
      door2.position.set(15.05,2.7,2.9);

      var door3=mk_door(1.6,4.2,0.15, 1);
      door3.rotation.z=Math.PI/2;
      apartment.add(door3);
      door3.position.set(10.35,2.7,2.9);

      var door4=mk_door(1.6,4.2,0.15, 1);
      door4.rotation.z=Math.PI/2;
      apartment.add(door4);
      door4.position.set(15.05,8.6,2.9);

      var door5=mk_door(1.6,4.2,0.15);
      door5.rotation.z=Math.PI/2;
      apartment.add(door5);
      door5.position.set(15.05,17.7,2.9);

      var door6=mk_door(1.6,4.2,0.15, 1);
      door6.rotation.z=Math.PI/2;
      apartment.add(door6);
      door6.position.set(10.35,17.7,2.9);

      var door7=mk_door(1.6,4.2,0.15);
      apartment.add(door7);
      door7.position.set(20.0,6.35,2.9);

      var window_salone1 = mk_window(2,2.4,0.2);
      apartment.add(window_salone1);
      window_salone1.position.set(3.0,0.15,2.8);

      var window_salone2 = mk_window(2,2.4,0.2);
      apartment.add(window_salone2);
      window_salone2.position.set(6.0,0.15,2.8);

      var window_camera = mk_window(2,2.4,0.2);
      apartment.add(window_camera);
      window_camera.position.set(20.2,0.15,2.8);

      var window_bagno = mk_window(2,2.4,0.2);
      window_bagno.rotation.z=Math.PI/2;
      apartment.add(window_bagno);
      window_bagno.position.set(24.45,8.2,2.8);

      var window_cucina = mk_window(2,2.4,0.2);
      window_cucina.rotation.z=Math.PI/2;
      apartment.add(window_cucina);
      window_cucina.position.set(24.45,16.2,2.8);

      var big_window_salone1 = mk_big_window(3.2,3,0.2);
      big_window_salone1.rotation.z=Math.PI/2;
      apartment.add(big_window_salone1);
      big_window_salone1.position.set(0.15,2.25,2.8);

      var big_window_salone2 = mk_big_window(3.2,3,0.2);
      big_window_salone2.rotation.z=Math.PI/2;
      apartment.add(big_window_salone2);
      big_window_salone2.position.set(0.15,6.88,2.8);

      var big_window_salone3 = mk_big_window(3.2,3,0.2);
      big_window_salone3.rotation.z=Math.PI/2;
      apartment.add(big_window_salone3);
      big_window_salone3.position.set(0.15,11.51,2.8);

      var big_window_salone4 = mk_big_window(3.2,3,0.2);
      big_window_salone4.rotation.z=Math.PI/2;
      apartment.add(big_window_salone4);
      big_window_salone4.position.set(0.15,16.14,2.8);

      var floor_camera = mk_floor(9,5.5,"./textures/parquet_letto.jpg",10,5);
      apartment.add(floor_camera);
      // floor_camera.scale.set(10,10,1);
      floor_camera.position.set(19.5,3.55,0.85);

      var floor_bagno = mk_floor(6.3,5.7,"./textures/bagno.jpg",8,8);
      apartment.add(floor_bagno);
      // floor_bagno.scale.set(10,10,1);
      floor_bagno.position.set(20.7,9.15,0.85);

      var floor_salone = mk_floor(9.6,20,"./textures/pav_salone.jpg",5,10);
      apartment.add(floor_salone);
      // floor_bagno.scale.set(10,10,1);
      floor_salone.position.set(5.6,10.8,0.85);

      var floor_ingresso = mk_floor(4.6,7.2,"./textures/pav_generico.jpg",10,15);
      apartment.add(floor_ingresso);
      // floor_bagno.scale.set(10,10,1);
      floor_ingresso.position.set(12.7,4,0.85);

      var floor_disimpegno = mk_floor(4.6,8.3,"./textures/pav_generico.jpg",10,15);
      apartment.add(floor_disimpegno);
      // floor_bagno.scale.set(10,10,1);
      floor_disimpegno.position.set(12.7,11.75,0.85);

      var floor_corridoio = mk_floor(4.6,4.6,"./textures/pav_generico.jpg",10,10);
      apartment.add(floor_corridoio);
      // floor_bagno.scale.set(10,10,1);
      floor_corridoio.position.set(12.7,18.5,0.85);

      var floor_cucina1 = mk_floor(9,14.5,"./textures/pav_generico.jpg",20,30);
      apartment.add(floor_cucina1);
      // floor_bagno.scale.set(10,10,1);
      floor_cucina1.position.set(19.5,13.7,0.84);

      var muro_ingr_1 = mk_hole(4.4,6,0.5,0,3.4,4.4,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_ingr_1);
      muro_ingr_1.position.set(10.5,0.81,0.8);

      var muro_ingr_2 = mk_hole(4.4,6,1.4,0,1.6,4.2,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_ingr_2);
      muro_ingr_2.position.set(10.5,7.40,0.8);

      var muro_ingr_3 = mk_hole(6.6,6,1.9,0,1.6,4.2,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_ingr_3);
      muro_ingr_3.rotation.y=Math.PI/2;
      muro_ingr_3.position.set(14.89,0.8,0.8);

      var muro_ingr_4 = mk_hole(6.6,6,1.9,0,1.6,4.2,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_ingr_4);
      muro_ingr_4.rotation.y=Math.PI/2;
      muro_ingr_4.position.set(10.50,0.8,0.8);

      var muro_dis_1 = mk_hole(4.4,6,1.4,0,1.6,4.2,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_dis_1);
      muro_dis_1.position.set(10.5,7.71,0.8);

      var muro_dis_2 = mk_wall(4.4, 6,  "./textures/muro_generico.jpg", 5, 5);
      apartment.add(muro_dis_2);
      muro_dis_2.position.set(10.5,15.9,0.8);

      var muro_dis_3 = mk_hole(8.2,6,0.9,0,1.6,4.2,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_dis_3);
      muro_dis_3.rotation.y=Math.PI/2;
      muro_dis_3.position.set(14.89,7.7,0.8);

      var muro_dis_4 = mk_wall(8.2,6,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_dis_4);
      muro_dis_4.rotation.y=Math.PI/2;
      muro_dis_4.position.set(10.5,7.7,0.8);

      var muro_cor_1 = mk_wall(4.4,6,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_cor_1);
      muro_cor_1.position.set(10.5,16.21,0.8);

      var muro_cor_2 = mk_wall(4.4,6,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_cor_2);
      muro_cor_2.position.set(10.5,20.8,0.8);

      var muro_cor_3 = mk_hole(4.6,6,1.5,0,1.6,4.2,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_cor_3);
      muro_cor_3.rotation.y=Math.PI/2;
      muro_cor_3.position.set(14.89,16.2,0.8);

      var muro_cor_4 = mk_hole(4.6,6,1.5,0,1.6,4.2,"./textures/muro_generico.jpg", 5,5);
      apartment.add(muro_cor_4);
      muro_cor_4.rotation.y=Math.PI/2;
      muro_cor_4.position.set(10.5,16.2,0.8);

      scene.add(apartment);