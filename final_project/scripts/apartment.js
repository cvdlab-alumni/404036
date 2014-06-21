var mesh;
      var apartment = new THREE.Object3D();

      var loader = new THREE.OBJLoader();
      loader.load('models/proj.obj', function (obj) {

        global_o = obj;

        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0xEFEFEF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
          new THREE.MeshBasicMaterial({wireframe: false, overdraw: false, color: 0xffffff, side: THREE.DoubleSide})
          ];

        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
          
        apartment.add(mesh);
        // scene.children[1].scale.x = 10;scene.children[1].scale.y = 10;scene.children[1].scale.z = 10;
      });

      apartmentm = mk_all_doors(apartment);

      apartment = mk_all_windows(apartment);

      apartment = mk_all_floors(apartment);

      apartment = mk_all_int_walls(apartment);

      var muro_ext_1 = mk_plane(10,2,2, 24.6,6.8, [3,2.8, 2,2.4,   6,2.8, 2,2.4,   11,0.8, 3.4,4.4,   20.2,2.8, 2,2.4]);
      muro_ext_1.rotation.x = Math.PI/2;
      apartment.add(muro_ext_1);
      muro_ext_1.position.set(0,0,0);

      var muro_ext_2 = mk_plane(10,2,2, 24.6,6.8, []);
      muro_ext_2.rotation.x = Math.PI/2;
      apartment.add(muro_ext_2);
      muro_ext_2.position.set(0,21.61,0);

      var muro_ext_3 = mk_plane(10,2,2, 21.6,6.8, [8.2,2.8, 2,2.4,   16.2,2.8, 2,2.4]);
      muro_ext_3.rotation.x = Math.PI/2;
      apartment.add(muro_ext_3);
      muro_ext_3.rotation.y = Math.PI/2;
      muro_ext_3.position.set(24.6,0,0);

      var muro_ext_4 = mk_plane(10,2,2, 21.6,6.8, [2.24,2.8, 3.2,3, 6.88,2.8, 3.2,3, 11.52,2.8, 3.2,3, 16.16,2.8, 3.2,3]);
      muro_ext_4.rotation.x = Math.PI/2;
      apartment.add(muro_ext_4);
      muro_ext_4.rotation.y = Math.PI/2;
      muro_ext_4.position.set(-0.01,0,0);



      // console.log(apartment);




      // apartment.scale.set(10,10,10);
      // apartment.rotation.x=-Math.PI/2;
      scene.add(apartment);