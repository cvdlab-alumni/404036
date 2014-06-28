var vector1 = new THREE.Vector3( 0, 0, 0 );
var vector2 = new THREE.Vector3( 0, 0, 0 );
var vector3 = new THREE.Vector3( 0, 0, 0 );
var vector4 = new THREE.Vector3( 0, 0, 0 );
function detectCollision() {
	var x=0, z=0;
	var vector;
	var projector2 = new THREE.Projector();
  	// // console.log(z,x);
  	// // console.log(controls.getMoveForward(), controls.getMoveBackward(), controls.getMoveLeft(), controls.getMoveRight());
	// if (controls.getMoveLeft()) x =-1;
	// if (controls.getMoveRight()) x = 1;
	// if (controls.getMoveBackward()) z = -1;
	// if (controls.getMoveForward()) z = 1;
	// // console.log(z,x);
	vector = new THREE.Vector3( 0, 0, 1 );

	// console.log(vector);
	//unproject passa da 2D->3D
	//project fa l'opposto 3D->2D
	projector2.unprojectVector(vector, camera);
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
	  	if (intersects.length > 0 && intersects[0].distance < 10) {
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

// setTimeout(function() {apartment.traverse(findCollision);}, 5000);
apartment.traverse(findCollision);
// setTimeout(function () {
// 	// console.log(letto);
// 	letto.traverse(findCollision);
// 	console.log("Numero di oggetti in objects: ", objects.length);
// },3000);

