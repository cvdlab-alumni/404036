//*******************************************************************************************************************
//************************************************** Test particle **************************************************
//*******************************************************************************************************************
var rain = false;

var particleCount = 10000,
particles = new THREE.Geometry(),
pMaterial = new THREE.ParticleBasicMaterial({
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
  var pX = Math.random() * 1000 - 500,
  pY = Math.random() * 1000 - 500,
  pZ = Math.random() * 1000 - 500,
  particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particle.velocityY = 5 + Math.random() / 5;
  particle.velocityX = (Math.random() - 0.5) / 3;
  particles.vertices.push(particle);
}

// create the particle system
var particleSystem = new THREE.ParticleSystem( particles, pMaterial);
particleSystem.sortParticles = true;
