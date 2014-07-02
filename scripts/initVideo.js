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
textureSW = new THREE.Texture(film);
textureSW.minFilter = THREE.LinearFilter;
textureSW.magFilter = THREE.LinearFilter;
textureSW.format = THREE.RGBFormat;
textureSW.generateMipmaps = false;


// ***** Audio *****
var soundsToUpdate = []

var Sound = function(src) {
	var audio = document.createElement('audio');
	var source = document.createElement('source');
	source.src = src;
	audio.appendChild(source);

	this.play = function() {
		audio.play();
	}
	this.pause = function() {
		audio.pause();
	}
	this.stop = function() {
		audio.pause();
		audio.currentTime = 0;
	}
	// this.updateVolume = function() {
	// 	var distance = this.position.distanceTo((!FPenabled) ? camera.position : controls.getObject().position);
	// 	if (distance <= radius) {
	// 		audio.volume = volume * (1 - distance / radius);
	// 	} else {
	// 		audio.volume = 0;
	// 	}
	// }
	// if (toUpdate) {
	// 	soundsToUpdate.push(this);
	// }
}

var crash_sound = new Sound(['sound/household042.mp3'], 15, 0.5, true);
