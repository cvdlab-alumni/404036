//*******************************************************************************************************************
//************************************************** Test particle **************************************************
//*******************************************************************************************************************
var rain = false;

var particleCount = 8000;
var particles = new THREE.Geometry();
var pMaterial = new THREE.ParticleBasicMaterial({
  color: 0xFFFFFF,
  size: 5,
  map: THREE.ImageUtils.loadTexture("textures/raindrop-2.png"),
  blending: THREE.AdditiveBlending,
  transparent: true
});


// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  // var pX = Math.random() * 1000 - 500,
  var pX = Math.random() * 754 - 377;
  var pY = Math.random() * 1000 - 500;
  var pZ = Math.random() * 1000 - 500;
  //IMpedisce di piovere in casa
  if(pZ>-108 && pZ<108){
    if(pX>0 && pX < 123) {pX = pX+(Math.random()+123);} else if (pX<0 && pX >-123) {pX = pX + (-Math.random()-123);}
  }

  particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particle.velocityY = 5 + Math.random() / 5;
  particle.velocityX = (Math.random() - 0.5) / 3;
  particles.vertices.push(particle);
}

// create the particle system
var particleSystem = new THREE.ParticleSystem( particles, pMaterial);
particleSystem.sortParticles = true;


//*******************************************************************************************************************
//************************************************** Shower **************************************************
//*******************************************************************************************************************
function castShower(){
  var showerCount = 100;
  var showerDrop = new THREE.Geometry();
  var showerDropMaterial = new THREE.ParticleBasicMaterial({
    color: 0xFFFFFF,
    size: 1,
    map: THREE.ImageUtils.loadTexture("textures/raindrop-2.png"),
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  for(var i = 0; i< showerCount; i++){
    var px = 0.2 * Math.cos(Math.random()*2* Math.PI);
    var py = 0.2 * Math.sin(Math.random()*2* Math.PI);
    var pz = Math.random() * 3;

    drop = new THREE.Vector3(px,py,pz);
    drop.velocityZ = 0.1 + Math.random() / 5;
    showerDrop.vertices.push(drop);
  }
  var showerSystem = new THREE.ParticleSystem(showerDrop, showerDropMaterial);
  showerSystem.sortParticles = true;
  return showerSystem;
}

//*******************************************************************************************************************
//******************************************************* Fire ******************************************************
//*******************************************************************************************************************
function castFire(count, radius, delta, h){
  var fireCount = count;
  var fireDrop = new THREE.Geometry();
  var fireDropMaterial = new THREE.ParticleBasicMaterial({
    color: 0xff0000,
    size: 0.5,
    map: THREE.ImageUtils.loadTexture("textures/smokeparticle.png"),
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  var alfa = 0;
  for(var i=0; i<fireCount; i++){
    
    alfa += (2/count);
    var px = radius * Math.cos(alfa*2* Math.PI);
    var py = radius * Math.sin(alfa*2* Math.PI);
    var pz = Math.PI*h;

    var drop = new THREE.Vector3(px,py,pz);
    fireDrop.vertices.push(drop);
  }
  var fireSystem = new THREE.ParticleSystem(fireDrop, fireDropMaterial);
  fireSystem.sortParticles = true;
  fireSystem.visible=false;
  return fireSystem;

}

