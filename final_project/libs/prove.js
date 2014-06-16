function distance(l,obj2,d){
	var ret=true;
	var i = 0;
	for(i=0;i<l.length;i++){
		if(!(Math.sqrt(Math.pow((l[i].x-obj2.x),2)+Math.pow((l[i].y-obj2.y),2))>d))
			ret=false;
	}
	return ret;
};
var ogg = {x: 0, y:0};
var lista=[];
lista.push(ogg);
console.log(ogg);
console.log(lista);
var n=1;
// console.log(distance(lista,{x:10.66, y:18.51},3));
while(n<20){
	console.log("Entro nel for", n);
      // var alberoCopy = albero.clone();
      var xx = (Math.random()*52)-22;
      var zz = (Math.random()*52)-22;
      var obj={x: xx, y: zz};
      console.log(obj);
      // lista.push(obj);
      console.log(lista);
		console.log("Valore dell'if", distance(lista, obj, 3));
      if(distance(lista, obj, 8)){
      	console.log("entro nell'if");
      	lista.push(obj);
        // alberoCopy.position.set(xx,0,zz);
        // scene.add(alberoCopy);
        n++; 
    } else {
    	console.log("entro nell'else");
    }

}
console.log(lista);
console.log(lista.length);
