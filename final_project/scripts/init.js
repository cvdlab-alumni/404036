var stats = initStats();


var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.up = new THREE.Vector3(0,0,1);

var projector = new THREE.Projector();
document.addEventListener('mousedown', onDocumentMouseDown, false);


var trackballControls = new THREE.TrackballControls(camera);

var axisHelper = new THREE.AxisHelper(21,6);
scene.add(axisHelper);


var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);


camera.position.set(-30,40,50);
camera.lookAt(new THREE.Vector3(0, 0, 0));
var toIntersect=[];