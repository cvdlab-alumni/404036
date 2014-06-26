
var telaio_texture = THREE.ImageUtils.loadTexture("./textures/lego_medio.jpg");
var frameMaterial = new THREE.MeshLambertMaterial({map: telaio_texture});

var porta_texture = THREE.ImageUtils.loadTexture("./textures/rovere_naturale.jpg");
var portMaterial = new THREE.MeshLambertMaterial({map: porta_texture});

var texture_lamp = THREE.ImageUtils.loadTexture("./textures/lamp2.jpg");
var texture_desk = THREE.ImageUtils.loadTexture("./textures/wood_texture1.jpg");

var texture_frame = THREE.ImageUtils.loadTexture("textures/frame.jpg");
var texture_frame_bump = THREE.ImageUtils.loadTexture("textures/frame_bump.jpg");
var texture_frame_normal = THREE.ImageUtils.loadTexture("textures/frame_normal.jpg");
var texture_photo = THREE.ImageUtils.loadTexture("textures/photo.jpg");


function mk_blind(width, height, depth){
	var blind_texture = THREE.ImageUtils.loadTexture("./textures/porta_blind.jpg");
	var blind_normal_texture = THREE.ImageUtils.loadTexture("./textures/porta_blind_normal.jpg");
	var portGeometry = new THREE.BoxGeometry(width/2, depth, height);
	var portMaterial = new THREE.MeshLambertMaterial({map: blind_texture, normalMap: blind_normal_texture});
	var port1 = new THREE.Mesh(portGeometry, portMaterial);
	var port2 = new THREE.Mesh(portGeometry, portMaterial);
	var hook1 = new THREE.Object3D();
	var hook2 = new THREE.Object3D();
	door = new THREE.Object3D();
	door.add(hook1);
	door.add(hook2);
	hook2.position.set(width,0,0)
	hook1.add(port1);
	port1.position.set(width/4,0,0)
	hook2.add(port2);
	port2.position.set(-width/4,0,0)
	toIntersect.push(port2);
	port2.open=false;
	port2.interact=function(){
		if(!this.open){

			new TWEEN.Tween(this.parent.rotation)
			.to({z: -Math.PI/2},1000)
			.start();
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}

	}
	return door;
}

function mk_door(width, height, depth, reverse){
	if(typeof(reverse)==='undefined') reverse = 0;
	var portGeometry = new THREE.BoxGeometry(width, depth, height);
	
	var port = new THREE.Mesh(portGeometry, portMaterial);
	var hook = new THREE.Object3D();
	var door = new THREE.Object3D();
	door.add(hook);
	hook.add(port);
	port.position.set(width/2,0,0);
	toIntersect.push(port);
	port.open=false;
	port.interact=function(){
		if(!this.open){
			if (reverse===1){
				new TWEEN.Tween(this.parent.rotation)
				.to({z: -Math.PI/2},1000)
				.start();
			} else {
				new TWEEN.Tween(this.parent.rotation)
				.to({z: Math.PI/2},1000)
				.start();
				// this.parent.rotation.z=(Math.PI/2);	
			}
			
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.rotation)
			.to({z: 0},1000)
			.start();
			// this.parent.rotation.z=0;
			this.open=false;
		}
	}
	return door;
}

function mk_window(width, height, depth){
	// if(typeof(reverse)==='undefined') reverse = 0;

	
	var windows = new THREE.Object3D();

	var frameGeometry1 = new THREE.BoxGeometry(width/2, depth, 0.1);
	var frameGeometry2 = new THREE.BoxGeometry(0.1, depth, height-0.2);
	var frame1 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame2 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame3 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var frame4 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var anta1 = new THREE.Object3D();
	anta1.add(frame1);
	anta1.add(frame2);
	anta1.add(frame3);
	anta1.add(frame4);

	frame1.position.set(width/4,0,0.05);
	frame2.position.set(width/4,0,(height-0.2+0.15));
	frame3.position.set(0.05,0,(height/2));
	frame4.position.set(-0.05+(width/2),0,(height/2));

	anta2=anta1.clone();

	hook1 = new THREE.Object3D();
	hook2 = new THREE.Object3D();

	windows.add(hook1);
	hook1.add(anta1);
	anta1.position.set(0,0,0);
	
	windows.add(hook2);
	hook2.position.set(width,0,0);
	hook2.add(anta2);
	anta2.position.set(-width/2,0,0);

	var glass1 = new THREE.Mesh(new THREE.BoxGeometry((width/2)-0.2, 0.15, height-0.2), new THREE.MeshLambertMaterial({color: 0x012345, opacity: 0.5, transparent: true}));
    anta1.add(glass1);
    glass1.position.set(width/4,0,height/2);

	var glass2 = new THREE.Mesh(new THREE.BoxGeometry((width/2)-0.2, 0.15, height-0.2), new THREE.MeshLambertMaterial({color: 0x012345, opacity: 0.5, transparent: true}));
    anta2.add(glass2);
    glass2.position.set(width/4,0,height/2); 

    toIntersect.push(glass1);
    glass1.open=false;
	glass1.interact=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: -Math.PI/2},1000)
			.start();

			// this.parent.parent.rotation.z=(-Math.PI/2);
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			// this.parent.parent.rotation.z=0;
			this.open=false;
		}
	}
	toIntersect.push(glass2);
    glass2.open=false;
	glass2.interact=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: Math.PI/2},1000)
			.start();
			// this.parent.parent.rotation.z=(Math.PI/2);
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
    return windows;
}

function mk_big_window(width, height, depth){
	var windows = new THREE.Object3D();
	var hook = new THREE.Object3D();
	windows.add(hook);
	var frameGeometry1 = new THREE.BoxGeometry(width, depth, 0.1);
	var frameGeometry2 = new THREE.BoxGeometry(0.1, depth, height-0.2);
	var frame1 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame2 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame3 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var frame4 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var anta = new THREE.Object3D();
	anta.add(frame1);
	anta.add(frame2);
	anta.add(frame3);
	anta.add(frame4);

	frame1.position.set(width/2,0,0.05);
	frame2.position.set(width/2,0,(height-0.2+0.15));
	frame3.position.set(0.05,0,(height/2));
	frame4.position.set(-0.05+(width),0,(height/2));

	var glass = new THREE.Mesh(new THREE.BoxGeometry((width)-0.2, 0.15, height-0.2), new THREE.MeshLambertMaterial({color: 0x012345, opacity: 0.5, transparent: true}));
    anta.add(glass);
    glass.position.set(width/2,0,height/2);

    toIntersect.push(glass);
    glass.open=false;
	glass.interact=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({x: Math.PI/6},1000)
			.start();
			// this.parent.parent.rotation.x=(Math.PI/6);
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({x: 0},1000)
			.start();
			// this.parent.parent.rotation.x=0;
			this.open=false;
		}
	}

	hook.add(anta);
	return windows;
}

function mk_lamp_ceiling(radius_lampShade, lColor, distance){
	var lampShadeGeometry = new THREE.SphereGeometry(radius_lampShade, 8, 8, 0, Math.PI, 0, Math.PI);
    var lampShadeMaterial = new THREE.MeshPhongMaterial({ color: lColor , shading: THREE.SmoothShading, shininess: 30, metal: false});
    lampShadeMaterial.side = THREE.DoubleSide;
    var lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
    lampShade.scale.z=0.5;

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.angle=Math.PI/2;
    spotLight.intensity=0;
    lampShade.add(spotLight);
 	lampShade.spotLight=spotLight;

 	var plight = new THREE.PointLight( 0xFFFFFF, 1, distance );
 	lampShade.add(plight);
 	lampShade.pointLight =plight;
 	plight.intensity=0;

 	var t = new THREE.Object3D();
 	lampShade.add(t);
 	t.position.set(0,0,-6);
 	lampShade.target = t;

 	toIntersect.push(lampShade);
 	lampShade.on=false;
 	// console.log(lampShade);
	lampShade.interact=function(){
		if(!this.on){
			this.children[0].intensity=0.3;
			this.children[1].intensity=1;
			this.on=true;
		} else {
			this.children[0].intensity=0;
			this.children[1].intensity=0;
			this.on=false;
		}

	}


    return lampShade;
}

function mk_desk(){
	var tavolo = new THREE.Object3D();
	var deskMaterial = new THREE.MeshLambertMaterial({map: texture_desk});
	var surfaceGeometry = new THREE.BoxGeometry(3,1.8,0.2);
	var legGeometry = new THREE.BoxGeometry(0.1,1.4,1.6);

	var desk = new THREE.Mesh(surfaceGeometry, deskMaterial);
	var leg1 = new THREE.Mesh(legGeometry, deskMaterial);
	var leg2 = leg1.clone();
	tavolo.add(desk);
	tavolo.add(leg1);
	tavolo.add(leg2);
	desk.position.set(0,0,0.9);
	leg1.position.set(1.2,0,0);
	leg2.position.set(-1.2,0,0);
	return tavolo;
}

function mk_frame(tipo){
	var picture = new THREE.Object3D();
	var fGeometry = new THREE.PlaneGeometry(5,5, 5,5);

	if(tipo==="bump"){ var fMaterial = new THREE.MeshPhongMaterial({ map: texture_frame, bumpMap: texture_frame_bump, bumpScale: 0.0, side: THREE.DoubleSide});} 
	else if (tipo==="normal"){var fMaterial = new THREE.MeshPhongMaterial({ map: texture_frame, normalMap: texture_frame_normal, side: THREE.DoubleSide});}
	else { var fMaterial = new THREE.MeshPhongMaterial({ map: texture_frame, side: THREE.DoubleSide});}
	
	var frame = new THREE.Mesh(fGeometry, fMaterial);
	picture.add(frame);
	frame.scale.set(1,0.9,1);

	var photoGeometry = new THREE.PlaneGeometry(3.3,2.9, 5,5);
	var photoMaterial = new THREE.MeshLambertMaterial({ map: texture_photo, side: THREE.DoubleSide});
	var photo = new THREE.Mesh(photoGeometry, photoMaterial);
	photo.position.set(0,-0.01,0.01)
	photo.scale.set(0.88,1,1);
	
	picture.add(photo);
	
	picture.rotation.x=Math.PI/2;
	picture.rotation.y=-Math.PI/2;
	picture.scale.set(0.3,0.3,0.3);
	return picture;
}

function mk_controller_tv(width, height){
	var control1 = new THREE.Mesh(new THREE.PlaneGeometry(width/2,height/2), new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide, transparent:true, opacity:0}));
	var control2 = new THREE.Mesh(new THREE.PlaneGeometry(width/2,height/2), new THREE.MeshBasicMaterial({color: 0xff0000, side: THREE.DoubleSide, transparent:true, opacity:0}));
	var control3 = new THREE.Mesh(new THREE.PlaneGeometry(width/2,height/2), new THREE.MeshBasicMaterial({color: 0x00ff00, side: THREE.DoubleSide, transparent:true, opacity:0}));
	var control4 = new THREE.Mesh(new THREE.PlaneGeometry(width/2,height/2), new THREE.MeshBasicMaterial({color: 0x0000ff, side: THREE.DoubleSide, transparent:true, opacity:0}));
	var controller = new THREE.Object3D();
	controller.add(control1);
	controller.add(control2);
	controller.add(control3);
	controller.add(control4);
	control1.position.set(width/2,height,0);
	control2.position.set(width,height,0);
	control3.position.set(width/2,height/2,0);
	control4.position.set(width,height/2,0);
	controller.control1=control1;
	controller.control2=control2;
	controller.control3=control3;
	controller.control4=control4;

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
	return controller;
}

function mk_shower(){
	var shower_box = new THREE.Object3D();
	var base = new THREE.Mesh(new THREE.BoxGeometry(2,2.4,0.30), new THREE.MeshLambertMaterial({color: 0xFFFFF0}));
	shower_box.add(base);
	base.position.set(0,0,0.15)

	var foot1 = new THREE.Mesh(new THREE.BoxGeometry(1.9,0.1,0.1), new THREE.MeshLambertMaterial({color: 0xFFFFF0}));
	var foot2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2.4,0.1), new THREE.MeshLambertMaterial({color: 0xFFFFF0}));
	shower_box.add(foot1);
	foot1.position.set(-0.05,1.15,0.35);
	shower_box.add(foot2);
	foot2.position.set(0.95,0,0.35);

	var fixed_door = new THREE.Mesh(new THREE.BoxGeometry(1.95,0.01,4), new THREE.MeshLambertMaterial({color: 0xFFFFFF, transparent: true, opacity: 0.5}));
	shower_box.add(fixed_door);
	fixed_door.position.set(-0.025,1.15,2.35);

	var fixed_door2 = new THREE.Mesh(new THREE.BoxGeometry(0.01,1.2,4), new THREE.MeshLambertMaterial({color: 0xFFFFFF, transparent: true, opacity: 0.5}));
	shower_box.add(fixed_door2);
	fixed_door2.position.set(0.95,-0.6,2.35);

	var moving_door = new THREE.Mesh(new THREE.BoxGeometry(0.01,1.16,4), new THREE.MeshLambertMaterial({color: 0xFFFFFF, transparent: true, opacity: 0.5}));
	shower_box.add(moving_door);
	moving_door.position.set(0.96,0.58,2.35);

	toIntersect.push(moving_door);
	moving_door.open = false;
	moving_door.interact = function(){
		if (moving_door.open){
			new TWEEN.Tween(moving_door.position)
			.to({y: "+0.9"},1000)
			.start();
			moving_door.open=false;
		} else { 
			new TWEEN.Tween(moving_door.position)
			.to({y: "-0.9"},1000)
			.start();
			moving_door.open=true;
		}
	}

	var torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.05, 8, 6, Math.PI/2), new THREE.MeshLambertMaterial({color: 0xBBBBBB}));
	torus.side = THREE.DoubleSide;
	shower_box.add(torus);
	torus.rotation.x=Math.PI/2;
	torus.position.set(-1,0,3.5);

	var cylinder = new THREE.Mesh( new THREE.CylinderGeometry( 0.05, 0.2, 0.2, 32 ), new THREE.MeshLambertMaterial( {color: 0xBBBBBB}));
	cylinder.rotation.x=Math.PI/2;
	shower_box.add(cylinder);
	cylinder.position.set(-0.51,0,3.5);

	var valveBase = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.5,0.5), new THREE.MeshLambertMaterial({color: 0x336699}));
	shower_box.add(valveBase);
	valveBase.position.set(-0.998,0,2.5);

	var valve = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.1), new THREE.MeshLambertMaterial({color: 0xBBBBBB}));
	valve.rotation.z=Math.PI/2;
	valveBase.add(valve);
	valve.position.set(0.05,0,0);

	var grip = new THREE.Mesh( new THREE.CylinderGeometry( 0.1, 0.1, 0.02, 6 ), new THREE.MeshLambertMaterial( {color: 0xBBBBBB}));
	grip.rotation.y=Math.PI/2;
	valve.add(grip);
	grip.position.set(0,-0.05,0);

	toIntersect.push(grip);
	grip.on = false;
	grip.interact= function(){
		if (grip.on){
			new TWEEN.Tween(grip.rotation)
			.to({y: Math.PI/2},1000)
			.start();
			apartment.remove(streamShower);
			grip.on=false;
		} else {
			new TWEEN.Tween(grip.rotation)
			.to({y: -Math.PI/2},1000)
			.start();
			
			apartment.add(streamShower);
			streamShower.position.set(18.3,7.71,0.8);

			grip.on=true;
		}

	};

	shower_box.grip = grip;
	return shower_box;
}