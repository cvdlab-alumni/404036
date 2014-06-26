var texture_screen = THREE.ImageUtils.loadTexture("models/iMac_desktop/screen.jpg");
var videoTexture = new THREE.Texture( videoImage );
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;

var texture_tvColor = THREE.ImageUtils.loadTexture("textures/Texture_TV_by_Alipse.jpg");
var texture_tvOff = THREE.ImageUtils.loadTexture("textures/tv_nera.jpg");

var texture_cucina = THREE.ImageUtils.loadTexture("models/kitchen/defuse.jpg");
var texture_cucina_normal = THREE.ImageUtils.loadTexture("models/kitchen/normal_normals.jpg");

var texture_sofa = THREE.ImageUtils.loadTexture("models/sofa/Furnishings.Fabrics.Linen.White.jpg");



var loader1 = new THREE.OBJLoader();

function loading (pathOBJ, pathMTL, f){
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', f);
  loader.load(pathOBJ, pathMTL, {side: THREE.DoubleSide});
}

//****** Desk ******//
var desk = mk_desk();
apartment.add(desk);
desk.position.set(17,1.8,1.9);

//***** Letto ****//
loading('models/bed/Bed.obj','models/bed/Bed.mtl',function (event) {
    var object = event.content;
    object.scale.set(1, 1, 1);
    // letto = object;
    object.rotation.x=Math.PI/2;
    apartment.add(object);
    object.position.set(22.7,4.2,1.55);
});

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

loading('models/iMac_desktop/iMac_desktop.obj', 'models/iMac_desktop/iMac_desktop.mtl',function (event) {
    var object = event.content;
    object.scale.set(0.1, 0.1, 0.1);
    object.rotation.x=Math.PI/2;
    object.rotation.y=Math.PI;
    apartment.add(object);
    object.position.set(17,1.8,2.87);
});


//Tavolo in salone
loading('models/table/Table.obj', 'models/table/Table.mtl',function (event) {
    var object = event.content;
    object.scale.set(12, 10, 12);
    object.rotation.x=Math.PI/2;
    object.rotation.y=Math.PI/2;
    apartment.add(object);
    object.position.set(5,5,1.6);
});

loader1.load('models/lcd_tv.obj', function (obj) {
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
screenTV.on = false;
    
apartment.add(screenTV);

var controller = mk_controller_tv(1.6,0.86);
screenTV.add(controller);
controller.position.set(-1.2,-0.63,0.01);

screenTV.rotation.x=Math.PI/2;
screenTV.position.set(4.9,19.4,2.99);

// ***** forno cucina *****
loader1.load('models/kitchen/fkc.obj', function (obj) {
      var material = new THREE.MeshPhongMaterial({map: texture_cucina, normalMap:texture_cucina_normal, metal: false});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(0.07, 0.07, 0.07);
      obj.rotation.x = Math.PI/2;
      apartment.add(obj);
      console.log(obj);
      obj.position.set(21.45,19.83,0.8);
});

// ***** Tavolo per la tv *****
loading('models/table_cheap/table.obj', 'models/table_cheap/table.mtl',function (event) {
    var object = event.content;
    object.scale.set(2, 2, 2.5);
    apartment.add(object);
    object.position.set(5,19.5,2.20);
});

// ***** Divano *****
loading('models/Couch/Couch.obj', 'models/Couch/Couch.mtl',function (event) {

    var object = event.content;
    object.scale.set(1, 1, 1);
    object.rotation.x = Math.PI/2;
    object.rotation.y = Math.PI;
    apartment.add(object);
    object.position.set(5,13,0.8);

});

// ***** toilet *****
loading('models/toilet/SA_LD_Toilet.obj', 'models/toilet/SA_LD_Toilet.mtl',function (event) {

    var object = event.content;
    object.scale.set(0.3, 0.3, 0.3);
    object.rotation.x = Math.PI/2;
    // object.rotation.y = Math.PI;
    apartment.add(object);
    object.position.set(23,11.21,1.9);

});

// ***** Lavandino *****
loader1.load('models/washbowl/washbowl.obj', function (obj) {
      var material = new THREE.MeshLambertMaterial({color: 0xffffff, metal: false, shading: THREE.SmoothShading});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(0.018, 0.018, 0.018);
      // obj.rotation.x = Math.PI/2;
      apartment.add(obj);
      obj.position.set(20,11.31,0.88);
});

// ***** bidet *****
// loading('models/bidet/bidet.obj','models/bidet/bidet.obj', function (event) {

//     var object = event.content;
//     object.scale.set(3, 3, 3);
//     // object.rotation.x = Math.PI/2;
//     // object.rotation.y = Math.PI;
//     apartment.add(object);
//     object.position.set(0,0,4);

// });

loader1.load('models/bidet/bidet.obj', function (obj) {
      var material = new THREE.MeshLambertMaterial({color: 0xffffff, metal: false, shading: THREE.SmoothShading});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(0.0018, 0.0018, 0.0018);
      obj.rotation.x = Math.PI/2;
      obj.rotation.y = Math.PI;
      apartment.add(obj);
      obj.position.set(22.8,6.7,0.86);
      console.log(apartment.children.length);
      objects.push(apartment.children[77]);
});

loading('models/Microwave/Microwave.obj','models/Microwave/Microwave.mtl', function (event) {

    var object = event.content;
    // object.scale.set(0.3, 0.3, 0.3);
    object.rotation.x = Math.PI/2;
    // object.rotation.y = Math.PI;
    apartment.add(object);
    // console.log(object);
    object.position.set(18.45,19.83,2.85);

});

loader1.load('models/Hitachi.obj', function (obj) {
      var material = new THREE.MeshLambertMaterial({color: 0xffffff, metal: false});
      obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
      });
      obj.scale.set(0.05, 0.05, 0.05);
      obj.rotation.x = Math.PI/2;
      obj.rotation.y = -Math.PI/2;
      apartment.add(obj);
      obj.position.set(19,13,0.8);
});

