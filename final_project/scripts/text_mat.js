var texture_screen = THREE.ImageUtils.loadTexture("models/iMac_desktop/screen.jpg");
var videoTexture = new THREE.Texture( videoImage );
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;

var texture_tvColor = THREE.ImageUtils.loadTexture("textures/Texture_TV_by_Alipse.jpg");
var texture_tvOff = THREE.ImageUtils.loadTexture("textures/tv_nera.jpg");

var texture_cucina = THREE.ImageUtils.loadTexture("models/kitchen/defuse.jpg");
var texture_cucina_normal = THREE.ImageUtils.loadTexture("models/kitchen/normal_normals.jpg");


var telaio_texture = THREE.ImageUtils.loadTexture("./textures/lego_medio.jpg");
var frameMaterial = new THREE.MeshLambertMaterial({map: telaio_texture});

var porta_texture = THREE.ImageUtils.loadTexture("./textures/rovere_naturale.jpg");
var portMaterial = new THREE.MeshLambertMaterial({map: porta_texture});

var texture_lamp = THREE.ImageUtils.loadTexture("./textures/lamp2.jpg");
var texture_desk = THREE.ImageUtils.loadTexture("./textures/wood_texture1.jpg");

var texture_frame = THREE.ImageUtils.loadTexture("textures/frame.jpg");
var texture_frame_bump = THREE.ImageUtils.loadTexture("textures/frame_bump.jpg");
var texture_frame_normal = THREE.ImageUtils.loadTexture("textures/frame_normal.jpg");
var texture_photo = THREE.ImageUtils.loadTexture("textures/photo.jpg");
var texture_photo2 = THREE.ImageUtils.loadTexture("textures/photo2.jpg");


var lampShadeMaterial = new THREE.MeshPhongMaterial({ color: 0xB0C4DE , shading: THREE.SmoothShading, shininess: 30, metal: false, side: THREE.DoubleSide});

var mat_floor_camera = mk_Texture_Material("textures/camera/parquet_letto.jpg", false, 0, true);
var mat_floor_bagno = mk_Texture_Material("textures/bagno/pavimento_bagno.jpg", false, 0, true);
var mat_floor_salone = mk_Texture_Material("textures/salone/pav_salone.jpg", false, 0, true);
var mat_floor_generico = mk_Texture_Material("textures/stanza/pav_generico.jpg", false, 0, true);

var mat_wall_generico = mk_Texture_Material("./textures/stanza/muro_generico.jpg", false, 0, true);
var texture_wall_generico = mat_wall_generico.map;
var texture_wall_generico2 =THREE.ImageUtils.loadTexture("textures/stanza/muro_generico2.jpg");
texture_wall_generico2.wrapS = texture_wall_generico2.wrapT = THREE.RepeatWrapping;
var mat_wall_salone = mk_Texture_Material("textures/salone/muro_salone.jpg", false, 0, true);
var texture_wall_salone = mat_wall_salone.map;
var texture_wall_salone2 =THREE.ImageUtils.loadTexture("textures/salone/muro_salone2.jpg");
texture_wall_salone2.wrapS = texture_wall_salone2.wrapT = THREE.RepeatWrapping;
var mat_wall_camera = mk_Texture_Material("textures/camera/muro_letto.jpg", false, 0, true);
var texture_wall_camera = mat_wall_camera.map;
var texture_wall_camera2 = THREE.ImageUtils.loadTexture("textures/camera/muro_letto2.jpg");
texture_wall_camera2.wrapS = texture_wall_camera2.wrapT = THREE.RepeatWrapping;

var mat_wall_bagno = mk_Texture_Material("./textures/bagno/muro_bagno.jpg", true, "./textures/bagno/muro_bagno_normal.jpg", true);
var mat_wall_cucina = mk_Texture_Material("./textures/cucina/muro_cucina.jpg", true, "./textures/cucina/muro_cucina_normal.jpg", true);
var mat_wall_esterno = mk_Texture_Material("./textures/rock-diffuse.jpg", true, "./textures/rock-normal.jpg", true);

var texture_prato = THREE.ImageUtils.loadTexture("textures/prato.jpg");
var texture_blackBoard = THREE.ImageUtils.loadTexture("textures/blackBoard.png");