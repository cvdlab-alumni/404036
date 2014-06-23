var stats = initStats();

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.up = new THREE.Vector3(0,1,0);
camera.position.set(-90,130,-90);
camera.lookAt(scene.position);

document.addEventListener('mousedown', onDocumentMouseDown, false);
window.addEventListener('resize', onWindowResize, false);
var toIntersect=[];


var trackballControls = new THREE.TrackballControls(camera);

var axisHelper = new THREE.AxisHelper(276);
scene.add(axisHelper);


var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0xC7C7C7, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);

THREE.ImageUtils.crossOrigin = "anonymous";

// first person controls
var FPenabled = false;
var controls;
var objects = [];
var rayMove = new THREE.Raycaster();
rayMove.ray.direction.set(0, 0, -1);
var rayPointer = new THREE.Raycaster();

var projector = new THREE.Projector();

// Caricamento unico texture
var tex_floor_camera = THREE.ImageUtils.loadTexture("./textures/parquet_letto.jpg");
var tex_floor_bagno = THREE.ImageUtils.loadTexture("./textures/bagno.jpg");
var tex_floor_salone = THREE.ImageUtils.loadTexture("./textures/pav_salone.jpg");
var tex_floor_generico = THREE.ImageUtils.loadTexture("./textures/pav_generico.jpg");
var tex_wall_generico = THREE.ImageUtils.loadTexture("./textures/muro_generico.jpg");
var tex_wall_salone = THREE.ImageUtils.loadTexture("./textures/muro_salone.jpg");
var tex_wall_camera = THREE.ImageUtils.loadTexture("./textures/muro_letto.jpg");
var tex_wall_bagno = THREE.ImageUtils.loadTexture("./textures/muro_bagno.jpg");
var tex_wall_cucina = THREE.ImageUtils.loadTexture("./textures/muro_cucina.jpg");
var tex_wall_cucina_normal = THREE.ImageUtils.loadTexture("./textures/muro_cucina_normal.jpg");
var tex_wall_esterno = THREE.ImageUtils.loadTexture("./textures/GraniteWall-ColorMap.jpg");
var tex_wall_esterno_normal = THREE.ImageUtils.loadTexture("./textures/GraniteWall-NormalMap.jpg");