var opac = 0.0;


var vector1 = new THREE.Vector3( 0, 0, 0 );
var vector2 = new THREE.Vector3( 0, 0, 0 );
var vector3 = new THREE.Vector3( 0, 0, 0 );
var vector4 = new THREE.Vector3( 0, 0, 0 );
function detectCollision() {
	var vector = new THREE.Vector3( 0, 0, 1 );
	var projector2 = new THREE.Projector();


	//unproject passa da 2D->3D
	//project fa l'opposto 3D->2D
	projector2.unprojectVector(vector, camera);
	// console.log("vettore: ",vector);
	// console.log("position: ", controls.getObject().position);
	// console.log("sub/normalize: ", vector.sub(controls.getObject().position));
	vector.y=35;
	vector1.copy(vector);
	vector2.copy(vector);
	vector2.negate();
	vector2.setY(35);
	vector3.set(-vector.z, 35, vector.x);
	vector4.set(vector.z, 35, -vector.x);
	var vects=[vector1, vector2, vector3, vector4];
	// console.log(vector);
	// console.log(vector1);
	// console.log(vector2);

	for(i=0;i<4;i++){	
		//Raycaster( origin, direction, near, far )
		var rayCaster = new THREE.Raycaster(controls.getObject().position, vects[i].sub(controls.getObject().position).normalize());

		var intersects = rayCaster.intersectObjects(objects);
	  	// console.log(intersects.length);
	  	if (intersects.length > 0 && intersects[0].distance < 8) {
		    // console.log(intersects[0].distance);
		    if(i===0) {
		   		console.log("In avanti collido con: ", intersects.length);
		   		controls.setFreezeForward(true);
		   	}
		   	if(i===1) {
	    		console.log("Indietro collido con: ", intersects.length);
	    		controls.setFreezeBackward(true);
		    }
		    if(i==2){
		   		console.log("A destra collido con: ",intersects.length);
		   		controls.setFreezeRight(true);
		   	}
		   	if(i===3){
		   		console.log("A sinistra collido con: ",intersects.length);
		   		controls.setFreezeLeft(true);
		   	}
		    
		} else {
		    if(i===0) {
		    	controls.setFreezeForward(false);
		    }
		    if(i===1) {
		    	controls.setFreezeBackward(false);
		   	}
		   	if(i===2) {
		   		controls.setFreezeRight(false);
		   	}
		   	if(i===3) {
		   		controls.setFreezeLeft(false);
		   	}

		}
	}
}



var collisione = false;
var objects = [];


var findCollision = function (child) {
	if (child instanceof THREE.Mesh) {
		// if(child.id===235) console.log("Cucna trovata!!!!!!!");
		objects.push(child);
	}
}

//Creo oggetti con cui collidere
var col_bed = new THREE.Mesh(new THREE.BoxGeometry(1.9,3.6,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_bed);
col_bed.position.set(22.8,4.2,2.5);

var col_mac = new THREE.Mesh(new THREE.BoxGeometry(3,1.8,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_mac);
col_mac.position.set(17,1.8,2.5);

var col_bidet = new THREE.Mesh(new THREE.BoxGeometry(1.1,1,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_bidet);
col_bidet.position.set(23.2, 7.1,2.5);

col_water = new THREE.Mesh(new THREE.BoxGeometry(1.1,1.4,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_water);
col_water.position.set(23.2 , 11.1, 2.5);

col_lavandino = new THREE.Mesh(new THREE.BoxGeometry(1.3,1.1,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_lavandino);
col_lavandino.position.set(20 , 11.4, 2.5);

col_forno = new THREE.Mesh(new THREE.BoxGeometry(4.8,2,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_forno);
col_forno.position.set(20,19.85,2.5);

col_frigo = new THREE.Mesh(new THREE.BoxGeometry(1.6,1.6,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_frigo);
col_frigo.position.set(19,12.9,2.5);

col_tavolo = new THREE.Mesh(new THREE.BoxGeometry(2.2,5.9,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_tavolo);
col_tavolo.position.set(5,5,2.5);

col_divano = new THREE.Mesh(new THREE.BoxGeometry(4.7,2,3), new THREE.MeshBasicMaterial({color: 0x999999, transparent: true, opacity: opac}));
apartment.add(col_divano);
col_divano.position.set(4.4,14.3,2.5);

objects.concat(shower, col_bed, col_mac, col_water,col_bidet, col_lavandino,col_forno, col_frigo, col_tavolo, col_divano);
apartment.traverse(findCollision);
