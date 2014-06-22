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

      apartment = mk_all_ext_walls(apartment);



      // console.log(apartment);



      // apartment.position.set(-123,0,-180);
      // // apartment.position.set(-12.3,-10.8,0);
      // apartment.scale.set(10,10,10);
      // apartment.rotation.x=-Math.PI/2;
      scene.add(apartment);