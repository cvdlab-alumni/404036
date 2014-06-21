
var telaio_texture = THREE.ImageUtils.loadTexture("./textures/lego_medio.jpg");
var frameMaterial = new THREE.MeshLambertMaterial({map: telaio_texture});

var porta_texture = THREE.ImageUtils.loadTexture("./textures/rovere_naturale.jpg");
var portMaterial = new THREE.MeshLambertMaterial({map: porta_texture});

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

