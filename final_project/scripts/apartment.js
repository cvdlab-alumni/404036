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


      // //Test obj & other loading
      // var texture_letto = THREE.ImageUtils.loadTexture("textures/texture_letto.jpg");
      // var loader = new THREE.OBJLoader();
      // loader.load('models/bed.obj', function (obj) {
      //   var material = new THREE.MeshLambertMaterial({map: texture_letto});
      //   // console.log(obj);
      //   obj.traverse(function (child) {
      //     if (child instanceof THREE.Mesh) {
      //       child.material = material;
      //     }
      //   });

      //   mesh = obj;
      //   obj.scale.set(1, 1, 1);
      //   obj.rotation.x = Math.PI/2;
      //   apartment.add(obj);
      //   obj.position.set(5,5,1.8);
      // });

      // loader.load('models/lcd_tv.obj', function (obj) {
      //   var material = new THREE.MeshPhongMaterial({color: 0x000000, metal:true});
      //   // console.log(obj);
      //   obj.traverse(function (child) {
      //     if (child instanceof THREE.Mesh) {
      //       child.material = material;
      //     }
      //   });

      //   mesh = obj;
      //   obj.scale.set(1, 1, 1);
      //   obj.rotation.x = Math.PI/2;
      //   apartment.add(obj);
      //   obj.position.set(5,10,1.8);
      // });

      

      // var loader = new THREE.OBJMTLLoader();
      // loader.addEventListener('load', function (event) {

      //   var object = event.content;

      //   // var wing2 = object.children[5].children[0];
      //   // var wing1 = object.children[4].children[0];

      //   // wing1.material.alphaTest = 0.5;
      //   // wing1.material.opacity = 0.6;
      //   // wing1.material.transparent = true;

      //   // wing2.material.alphaTest = 0.4;
      //   // wing2.material.opacity = 0.7;
      //   // wing2.material.transparent = true;

      //   object.scale.set(140, 140, 140);
      //   mesh = object;
      //   // apartment.add(mesh);

      // });


      // loader.load(
      //   'models/imac.obj', 
      //   'models/imac.mtl', 
      //   {side: THREE.DoubleSide}
      // );



      // console.log(apartment);



      apartment.position.set(-123,0,-180);
      apartment.scale.set(10,10,10);
      apartment.rotation.x=-Math.PI/2;
      scene.add(apartment);