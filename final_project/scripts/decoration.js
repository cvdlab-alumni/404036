var texture_screen = THREE.ImageUtils.loadTexture("models/iMac_desktop/screen.jpg");
var videoTexture = new THREE.Texture( videoImage );
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;

// var loader1 = new THREE.OBJLoader();
var loader1 = new THREE.OBJMTLLoader();
var loader2 = new THREE.OBJMTLLoader();


//****** Desk ******//
var desk = mk_desk();
apartment.add(desk);
desk.position.set(17,1.8,1.9);
var letto;
//***** Letto ****//
loader2.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(1, 1, 1);
    letto = object;
    letto.rotation.x=Math.PI/2;
    apartment.add(letto);
    letto.position.set(22.7,4.2,1.6);

});
loader2.load('models/bed/Bed.obj', 'models/bed/Bed.mtl', {side: THREE.DoubleSide});

// ***** Imac *****
var video = document.getElementById( 'monitor' );

videoImage = document.getElementById( 'videoImage' );
videoImageContext = videoImage.getContext( '2d' );
// background color if no video present
videoImageContext.fillStyle = '#000000';
videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );


      
// var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );

var imac;
var screenMac = new THREE.Mesh(new THREE.PlaneGeometry(0.7,0.47), new THREE.MeshLambertMaterial({map: texture_screen, side: THREE.DoubleSide}));
// console.log(screenMac);
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
screenMac.position.set(16.985,2.137,3.832);

loader1.addEventListener('load', function (event) {

    var object = event.content;
    object.scale.set(0.1, 0.1, 0.1);
    imac = object;
    imac.rotation.x=Math.PI/2;
    imac.rotation.y=Math.PI;
    apartment.add(imac);
    imac.position.set(17,1.8,3.07);
    
    
    


});
loader1.load('models/iMac_desktop/iMac_desktop.obj', 'models/iMac_desktop/iMac_desktop.mtl', {side: THREE.DoubleSide});
