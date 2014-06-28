// ******** webcam ********* 
var video = document.getElementById( 'monitor' );

videoImage = document.getElementById( 'videoImage' );
var videoImageContext = videoImage.getContext( '2d' );
// background color if no video present
videoImageContext.fillStyle = '#000000';
videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

// *********** STAR WARS ***********
var textureSW;
var $film = $('#film');
var film = $film[0];

radius=100;
film.position= new THREE.Vector3();
film.position.set(-75,20,-80);
film.update = function ( camera ) {
	var distance = this.position.distanceTo( camera.position );
	if ( distance <= radius ) {
		film.volume = 1 * ( 1 - distance / radius );
	} else {
		film.volume = 0;
	}
}

film.pause();
console.log(film);
textureSW = new THREE.Texture(film);
textureSW.minFilter = THREE.LinearFilter;
textureSW.magFilter = THREE.LinearFilter;
textureSW.format = THREE.RGBFormat;
textureSW.generateMipmaps = false;
