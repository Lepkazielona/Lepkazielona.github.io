import './style.css'

import * as THREE from 'three'
import Alpine from 'alpinejs'
import axios from 'axios'

window.Alpine = Alpine
Alpine.start()

console.log(navigator.language)

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

//var light = new THREE.AmbientLight(0xc8c8c8);
var light = new THREE.PointLight(0xc8c8c8, 1, 100)
light.position.set(-1,0,2)
//const helper = new THREE.DirectionalLightHelper( light, 5 );
//const helper = new THREE.PointLightHelper(light, 1)
scene.add(light);
//scene.add(helper)

window.addEventListener("touchmove", onMouseWheel)
window.addEventListener("wheel", onMouseWheel)
function onMouseWheel(){
  const t = document.body.getBoundingClientRect().top;
  cube.rotation.x += 0.1
  cube.rotation.y += 0.1
}

function animate(){
  requestAnimationFrame(animate)
  cube.rotation.x += 0.005
  cube.rotation.y += 0.005
  renderer.render(scene,camera)
}
animate()