var stats = initStats();

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.up = new THREE.Vector3(0,1,0);
camera.position.set(-90,130,-90);
camera.lookAt(scene.position);

document.addEventListener('mousedown', onDocumentMouseDown, false);
window.addEventListener('resize', onWindowResize, false);

var toIntersect=[];

var trackballControls = new THREE.TrackballControls(camera);

var axisHelper = new THREE.AxisHelper(276);
// scene.add(axisHelper);

var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0xC7C7C7, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);

THREE.ImageUtils.crossOrigin = "anonymous";

// first person controls
var FPenabled = false;
var controls;

var rayMove = new THREE.Raycaster();
rayMove.ray.direction.set(0, 0, -1);
var rayPointer = new THREE.Raycaster();

var projector = new THREE.Projector();



// Caricamento unico texture
// var mat_floor_camera = mk_Texture_Material("textures/camera/parquet_letto.jpg", false, 0, true);
// var mat_floor_bagno = mk_Texture_Material("textures/bagno/pavimento_bagno.jpg", false, 0, true);
// var mat_floor_salone = mk_Texture_Material("textures/salone/pav_salone.jpg", false, 0, true);
// var mat_floor_generico = mk_Texture_Material("textures/stanza/pav_generico.jpg", false, 0, true);

// var mat_wall_generico = mk_Texture_Material("./textures/stanza/muro_generico.jpg", false, 0, true);
// var texture_wall_generico = mat_wall_generico.map;
// var texture_wall_generico2 =THREE.ImageUtils.loadTexture("textures/stanza/muro_generico2.jpg");
// texture_wall_generico2.wrapS = texture_wall_generico2.wrapT = THREE.RepeatWrapping;
// var mat_wall_salone = mk_Texture_Material("textures/salone/muro_salone.jpg", false, 0, true);
// var texture_wall_salone = mat_wall_salone.map;
// var texture_wall_salone2 =THREE.ImageUtils.loadTexture("textures/salone/muro_salone2.jpg");
// texture_wall_salone2.wrapS = texture_wall_salone2.wrapT = THREE.RepeatWrapping;
// var mat_wall_camera = mk_Texture_Material("textures/camera/muro_letto.jpg", false, 0, true);
// var texture_wall_camera = mat_wall_camera.map;
// var texture_wall_camera2 = THREE.ImageUtils.loadTexture("textures/camera/muro_letto2.jpg");
// texture_wall_camera2.wrapS = texture_wall_camera2.wrapT = THREE.RepeatWrapping;

// var mat_wall_bagno = mk_Texture_Material("./textures/bagno/muro_bagno.jpg", true, "./textures/bagno/muro_bagno_normal.jpg", true);
// var mat_wall_cucina = mk_Texture_Material("./textures/cucina/muro_cucina.jpg", true, "./textures/cucina/muro_cucina_normal.jpg", true);
// var mat_wall_esterno = mk_Texture_Material("./textures/rock-diffuse.jpg", true, "./textures/rock-normal.jpg", true);

// var texture_prato = THREE.ImageUtils.loadTexture("textures/prato.jpg");
// var texture_blackBoard = THREE.ImageUtils.loadTexture("textures/blackBoard.png");