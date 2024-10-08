//@ts-nocheck
import * as THREE from 'three'

if(typeof window !== 'undefined') { // second canvas settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera.position.z = 5

    Array(300).fill().forEach(() => {
        var mesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(1, 1),
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
        )
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
        mesh.position.set(x, y, z)
        scene.add(mesh) 
    })

    window.addEventListener('resize', () => {
        camera.updateProjectionMatrix()
        renderer.setSize( window.innerWidth, window.innerHeight );
    })

    function animate() {
        renderer.render( scene, camera );
        scene.traverse(function(object) {
            if(object instanceof THREE.Mesh) {
                camera.rotation.y -= 0.00001
                object.rotation.x += 0.01
                object.rotation.y += 0.01
                object.rotation.z += 0.01
            }
        })
    }
    renderer.setAnimationLoop( animate );
}