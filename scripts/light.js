var dir1 = new THREE.DirectionalLight(0xffffff);
dir1.position.set(50, 10, 0);
dir1.intensity = 0.6;
scene.add(dir1);

var dir2 = new THREE.DirectionalLight(0xffffff);
dir2.position.set(-50, 10, 0);
dir2.intensity = 0.6;
scene.add(dir2);

var dir3 = new THREE.DirectionalLight(0xffffff);
dir3.position.set(0, 10, 50);
dir3.intensity = 0.6;
scene.add(dir3);

var dir4 = new THREE.DirectionalLight(0xffffff);
dir4.position.set(0, 10, -50);
dir4.intensity = 0.6;
scene.add(dir4);


// Disimpegno

var light1 = mk_lamp_ceiling(0.3, 55);
apartment.add(light1);
light1.position.set(12.8,12.3,6);

// Ingresso
var light2 = mk_lamp_ceiling(0.3, 50);
apartment.add(light2);
light2.position.set(12.8,4.3,6);

//Corridoip
var light3 = mk_lamp_ceiling(0.3, 50);
apartment.add(light3);
light3.position.set(12.8,18.3,6);

//Camera
var light4 = mk_lamp_ceiling(0.3, 55);
apartment.add(light4);
light4.position.set(19.6,3.5,6);


//Bagno
var light5 = mk_lamp_ceiling(0.3, 50);
apartment.add(light5);
light5.position.set(20.8,9.3,6);



//Cucina
var light6 = mk_lamp_ceiling(0.3, 70);
apartment.add(light6);
light6.position.set(19.5,16.8,6);


// Salone
var light7 = mk_lamp_ceiling(0.3, 75);
apartment.add(light7);
light7.position.set(5,15.4,6);


var light8 = mk_lamp_ceiling(0.3, 75);
apartment.add(light8);
light8.position.set(5,6.2,6);

apartment.luci = [light1, light2, light3, light4, light5, light6 ,light7, light8];

function mk_switch(luci){
      var panel = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.003,0.2), new THREE.MeshLambertMaterial({color: 0xCC9966, side:THREE.DoubleSide}));
      var switch_light = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.03,0.01), new THREE.MeshLambertMaterial({color: 0xFFFFEE, side:THREE.DoubleSide}));
      
      var hook = new THREE.Object3D();
      panel.add(hook);
      hook.add(switch_light);

      switch_light.position.set(0,0.009,0);
      hook.rotation.set(Math.PI/4,0,0);
      // panel.on=false;
      toIntersect.push(panel);
      panel.click=0;
      panel.interact = function(){
            // debugger;;
            if(this.click%2===0){
                        new TWEEN.Tween(this.children[0].rotation)
                        .to({x: -Math.PI/4},500)
                        .start();
                  } else {
                        new TWEEN.Tween(this.children[0].rotation)
                        .to({x: Math.PI/4},500)
                        .start();
                  }
            for (var i=0; i<luci.length;i++){                  
                  luci[i].interact();
            }
            this.click++;

      }
      return panel;
}
//Salone
var switch01 = mk_switch([light7, light8]);
apartment.add(switch01);
switch01.rotation.set(0,0,Math.PI/2);
switch01.position.set(10.185,5,3);

var switch02 = mk_switch([light7, light8]);
apartment.add(switch02);
switch02.rotation.set(0,0,Math.PI/2);
switch02.position.set(10.185,17,3);

//Camera
var switch03 = mk_switch([light4]);
apartment.add(switch03);
switch03.rotation.set(0,0,3*Math.PI/2);
switch03.position.set(15.21,5,3);

//Cucina
var switch04 = mk_switch([light6]);
apartment.add(switch04);
switch04.rotation.set(0,0,3*Math.PI/2);
switch04.position.set(15.21,11,3);

var switch05 = mk_switch([light6]);
apartment.add(switch05);
switch05.rotation.set(0,0,3*Math.PI/2);
switch05.position.set(15.21,16.8,3);

//corridoio
var switch06 = mk_switch([light3]);
apartment.add(switch06);
switch06.rotation.set(0,0,Math.PI/2);
switch06.position.set(14.89,16.9,3);

var switch07 = mk_switch([light3]);
apartment.add(switch07);
switch07.rotation.set(0,0,3*Math.PI/2);
switch07.position.set(10.51,16.9,3);

//Bagno
var switch08 = mk_switch([light5]);
apartment.add(switch08);
// switch08.rotation.set(0,0,3*Math.PI/2);
switch08.position.set(21.8,6.53,3);

//Ingresso
var switch09 = mk_switch([light2]);
apartment.add(switch09);
switch09.rotation.set(0,0,3*Math.PI/2);
switch09.position.set(10.51,2,3);

//Disimpegno
var switch10 = mk_switch([light1]);
apartment.add(switch10);
switch10.position.set(14,7.71,3);