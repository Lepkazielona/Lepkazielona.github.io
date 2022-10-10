import './style.css'

import * as THREE from 'three'


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio/3);
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light = new THREE.AmbientLight(0x404040);
scene.add(light);

window.addEventListener("wheel", onMouseWheel)
function onMouseWheel(){
  const t = document.body.getBoundingClientRect().top;
  cube.rotation.x += t * 0.0005
  cube.rotation.y += t * 0.0005
}

function animate(){
  requestAnimationFrame(animate)
  cube.rotation.x += 0.005
  cube.rotation.y += 0.005
  renderer.render(scene,camera)
}
animate()