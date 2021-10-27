const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("grey", 1);
document.body.appendChild(renderer.domElement);

//const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//scene.add(directionalLight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const geometry2 = new THREE.PlaneGeometry(100, 100, 1, 1);
const material2 = new THREE.MeshBasicMaterial({ color: "blue" });
const plane = new THREE.Mesh(geometry2, material2);
scene.add(plane);
plane.rotation.x = 90;

camera.position.z = 5;

//import * from "js/FirstPersonControls.js"
//FirstPersonControls.FirstPersonControls(camera, document);

//animate is a main loop I guess
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();