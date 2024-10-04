import * as THREE from 'three'

if(typeof window !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera.position.y = 1

    const gridhelper = new THREE.GridHelper(100, 20)
    scene.add(gridhelper)

    camera.position.z = 5;

    function animate() {
        renderer.render( scene, camera );
        camera.position.z -= 0.01
        if(camera.position.z < -20) {
            camera.position.z = 0
        }
    }
    renderer.setAnimationLoop( animate );
}