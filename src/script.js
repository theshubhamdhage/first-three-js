import './style.css'
import * as THREE from 'three'




//cursor

const cursor={
    x:0,
    y:0
}

window.addEventListener('mousemove',(event)=>{
    cursor.x = event.clientX/sizes.width -0.5;
    cursor.y = event.clientY/sizes.height -0.5;

    // console.log(cursor.x);
    // console.log(cursor.y);

    // console.log(Math.sin(cursor.x));
})


//scene
const scene = new THREE.Scene();


//geometries or red cube

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)


//Sizes

const sizes ={
    width:800,
    height:600
}


//camera

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3
// camera.lookAt(mesh.position)
// alert(camera.position.length())
scene.add(camera)



//renderer

const canvas = document.querySelector('.webgl')
// console.log(canvas);

const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)



//animation

let time = Date.now();


const tick =()=>{

    //time

    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    //updateObject
    // mesh.rotation.y += 0.001*deltaTime;


    //showFromHtml
    // let show = document.querySelector('.show')
    // show.innerHTML = deltaTime
    
    //updateCamera
    camera.position.x = Math.sin(cursor.x* Math.PI*2 )*3;
    camera.position.z = Math.cos(cursor.x* Math.PI*2 )*3;
    camera.position.y = -cursor.y*3;
    camera.lookAt(mesh.position)
    //render
    renderer.render(scene,camera);
    window.requestAnimationFrame(tick)
}

tick();

