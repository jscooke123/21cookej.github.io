// Global variables
let camera, scene, renderer;
let cube;

init();
animate();

function init() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('cube-container').appendChild(renderer.domElement);

    // Cube geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/textures/side1.jpg') }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/textures/side2.jpg') }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/textures/side3.jpg') }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/textures/side4.jpg') }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/textures/side5.jpg') }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/textures/side6.jpg') })
    ];
    cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Resize handling
    window.addEventListener('resize', onWindowResize);
}

function animate() {
    requestAnimationFrame(animate);

    // Cube rotation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
