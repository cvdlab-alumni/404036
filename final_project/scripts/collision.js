var collisione = false;


var findCollision = function (child) {
	if (child instanceof THREE.Mesh) {
		// if(child.id===235) console.log("Cucna trovata!!!!!!!");
		objects.push(child);
	}
}

setTimeout(function() {apartment.traverse(findCollision);}, 5000);
// apartment.traverse(findCollision);
// setTimeout(function () {
// 	// console.log(letto);
// 	letto.traverse(findCollision);
// 	console.log("Numero di oggetti in objects: ", objects.length);
// },3000);

