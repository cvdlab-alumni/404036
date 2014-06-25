var texture_screen = THREE.ImageUtils.loadTexture("models/iMac_desktop/screen.jpg");
var videoTexture = new THREE.Texture( videoImage );
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;

var texture_tvColor = THREE.ImageUtils.loadTexture("textures/Texture_TV_by_Alipse.jpg");
var texture_tvOff = THREE.ImageUtils.loadTexture("textures/tv_nera.jpg");

var texture_cucina = THREE.ImageUtils.loadTexture("models/kitchen/defuse.jpg");
var texture_cucina_normal = THREE.ImageUtils.loadTexture("models/kitchen/normal_normals.jpg");

var texture_sofa = THREE.ImageUtils.loadTexture("models/sofa/Furnishings.Fabrics.Linen.White.jpg");



var loader1 = new THREE.OBJMTLLoader();
var loader2 = new THREE.OBJMTLLoader();
var loader3 = new THREE.OBJMTLLoader();
var loader4 = new THREE.OBJLoader();
var loader5 = new THREE.OBJMTLLoader();

//****** Desk ******//
var desk = mk_desk();
apartment.add(desk);
desk.position.set(17,1.8,1.9);

//***** Letto ****//
loader1.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(1, 1, 1);
    // letto = object;
    object.rotation.x=Math.PI/2;
    apartment.add(object);
    object.position.set(22.7,4.2,1.55);

});
loader1.load('models/bed/Bed.obj', 'models/bed/Bed.mtl', {side: THREE.DoubleSide});

// ***** Imac *****
var screenMac = new THREE.Mesh(new THREE.PlaneGeometry(0.7,0.47), new THREE.MeshLambertMaterial({map: texture_screen, side: THREE.DoubleSide}));

toIntersect.push(screenMac);
screenMac.on=false;
screenMac.interact=function(){
      if(!this.on){
            screenMac.material.map=videoTexture;
            this.on=true;
      } else {
            screenMac.material.map=texture_screen;
            this.on=false;
      }
}
apartment.add(screenMac);
screenMac.rotation.y=Math.PI;
screenMac.rotation.x=Math.PI*0.562;
screenMac.position.set(16.985,2.137,3.632);

loader2.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.1, 0.1, 0.1);
    object.rotation.x=Math.PI/2;
    object.rotation.y=Math.PI;
    apartment.add(object);
    object.position.set(17,1.8,2.87);
});
loader2.load('models/iMac_desktop/iMac_desktop.obj', 'models/iMac_desktop/iMac_desktop.mtl', {side: THREE.DoubleSide});

//Tavolo in salone
loader3.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(12, 10, 12);
    object.rotation.x=Math.PI/2;
    object.rotation.y=Math.PI/2;
    apartment.add(object);
    object.position.set(5,5,1.6);

});
loader3.load('models/table/Table.obj', 'models/table/Table.mtl', {side: THREE.DoubleSide});

//Televisione 
loader4.load('models/lcd_tv.obj', function (obj) {
      var material = new THREE.MeshPhongMaterial({color: 0xCCCCCC, metal: false});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(1, 1, 1);
      obj.rotation.x = Math.PI/2;
      apartment.add(obj);
      obj.position.set(4.9,19.5,2.92);
});
var isOn = false;
var countClick=0;


var screenTV = new THREE.Mesh(new THREE.PlaneGeometry(1.6,0.86), new THREE.MeshLambertMaterial({map: texture_tvOff, side: THREE.DoubleSide}));
// toIntersect.push(screenTV);
screenTV.on = false;
//       screenTV.interact = function () {
//         if(!screenTV.on) {
//             isOn = true;
//             screenTV.on = true;
//             screenTV.material.map=textureSW;
//             countClick++;
//         } else {
//             isOn = false;
//             screenTV.on = false;
//             screenTV.material.map=texture_tvOff;
//             if(countClick%3==1){ film.src="movies/star_wars_4.ogv"} else if (countClick%3==2){film.src="movies/Dragon_ball.ogv"} else {film.src="movies/Big_Buck_Bunny_small.ogv"}
//             }
//         }
    
apartment.add(screenTV);

var controller = mk_controller_tv(1.6,0.86);
screenTV.add(controller);
controller.position.set(-1.2,-0.63,0.01);

toIntersect.push(controller.control1);
toIntersect.push(controller.control2);
toIntersect.push(controller.control3);
toIntersect.push(controller.control4);
controller.control1.interact=function(){
      if(screenTV.on) {
            isOn = false;
            screenTV.on = false;
            screenTV.material.map=texture_tvOff;
      } else {
        screenTV.on = true;
        screenTV.material.map=texture_tvColor;
      }
}
controller.control2.interact=function(){
      if(screenTV.on) {
            isOn = true;
            screenTV.on = true;
            screenTV.material.map=textureSW;
      }
      film.src="movies/star_wars_4.ogv";
}
controller.control3.interact=function(){
      if(screenTV.on) {
            isOn = true;
            screenTV.on = true;
            screenTV.material.map=textureSW;
      }
      film.src="movies/Dragon_ball.ogv";
}
controller.control4.interact=function(){
      if(screenTV.on) {
            isOn = true;
            screenTV.on = true;
            screenTV.material.map=textureSW;
      }
      film.src="movies/Big_Buck_Bunny_small.ogv";
}



screenTV.rotation.x=Math.PI/2;
screenTV.position.set(4.9,19.4,2.99);

loader4.load('models/kitchen/fkc.obj', function (obj) {
      var material = new THREE.MeshPhongMaterial({map: texture_cucina, normalMap:texture_cucina_normal, metal: false});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      // console.log(obj);
      obj.scale.set(0.07, 0.07, 0.07);
      obj.rotation.x = Math.PI/2;
      apartment.add(obj);
      obj.position.set(21.45,19.83,0.8);
});

loader5.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(2, 2, 2.5);
    // letto = object;
    // object.rotation.x=Math.PI/2;
    apartment.add(object);
    object.position.set(5,19.5,2.20);

});
loader5.load('models/table_cheap/table.obj', 'models/table_cheap/table.mtl', {side: THREE.DoubleSide});

loader4.load('models/sofa/modern_sofa.obj', function (obj) {
      var material = new THREE.MeshPhongMaterial({map: texture_sofa, metal: false});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      // console.log(obj);
      obj.scale.set(0.05, 0.05, 0.05);
      obj.rotation.x = Math.PI/2;

      apartment.add(obj);
      obj.rotation.y = Math.PI;
      obj.position.set(5,13,0.8);
});