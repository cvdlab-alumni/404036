      function render() {
        stats.update();
        trackballControls.update();

        
        requestAnimationFrame(render);
        webGLRenderer.render(scene, camera);
      }

      function createMesh(geom,rx, ry, imageFile, bump) {
        var texture = THREE.ImageUtils.loadTexture("" + imageFile)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( rx, ry );
        var floorMaterial = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide } );
        // geom.computeVertexNormals();
        // var mat = new THREE.MeshLambertMaterial({map: texture, side: THREE.DoubleSide});
        // mat.map = texture;

        if (bump) {
          var bump = THREE.ImageUtils.loadTexture("" + bump)
          mat.bumpMap = bump;
          mat.bumpScale = 0.2;
        }

        var mesh = new THREE.Mesh(geom, floorMaterial);

        return mesh;
      }

      function onDocumentMouseDown (event) {
        event.preventDefault();

        // map viewport coordinates in ([-1,1], [-1,1], 0.5)
        var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
        projector.unprojectVector(vector, camera);

        var raycaster = new THREE.Raycaster(camera.position, 
          vector.sub(camera.position).normalize());

        var intersects = raycaster.intersectObjects(toIntersect);

        if (intersects.length > 0) {
          intersects[ 0 ].object.interact && intersects[ 0 ].object.interact(); 
        }
      }

      function initStats() {
        var stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        $('body').append(stats.domElement);
        return stats;
      }
      function mk_wall(b,h,texture, rx,ry) {
        b = b/10;
        h= h/10;

        var options = {amount: 0.01,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(b,0);
        shape.lineTo(b,h);
        shape.lineTo(0,h);

        var wallGeometry = new THREE.ExtrudeGeometry( shape, options );

        var wall = createMesh(wallGeometry,rx,ry,texture);
        wall.rotation.x = Math.PI/2;
        wall.scale.set(10,10,1);
        return wall;
      }

      // b ed h sono le dimensioni della parete da creare, hx,hz,offX,offZ sono opzionali(potete così creare una parete senza buchi)
      // hx e hz sono lo spazio tra il pto 0,0 e il punto in cui deve iniziare il buco, offX e offZ sono le dimensioni del buco
      // la funzione createMesh la trovate in utilities.js
      // Buon lavoro :)
      function mk_hole(b,h,hx,hz,offX,offZ, texture, rx,ry) {
        b = b/10;
        h= h/10;

        var options = {amount: 0.01,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(b,0);
        shape.lineTo(b,h);
        shape.lineTo(0,h);

        if(hx!==undefined) {
          hx = hx/10;
          hz = hz/10;
          offX = offX/10;
          offZ = offZ/10;
          var hole = new THREE.Path();
          hole.moveTo(hx,hz);
          hole.lineTo(hx+offX,hz);
          hole.lineTo(hx+offX,hz+offZ);
          hole.lineTo(hx,hz+offZ);
          shape.holes.push(hole);
        }
        var wallGeometry = new THREE.ExtrudeGeometry( shape, options );

        var wall = createMesh(wallGeometry,rx,ry,texture);
        wall.rotation.x = Math.PI/2;
        wall.scale.set(10,10,1);
        return wall;
      }