// Global variables
let camera, scene, renderer;
let cube, cubeRotation = 0;
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

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
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    // Resize handling
    window.addEventListener('resize', onWindowResize);
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // If user is dragging, rotate cube based on mouse movement
    if (isDragging) {
        cubeRotation += (previousMousePosition.x - event.clientX) * 0.01;
    } else {
        // Continue spinning in the current direction
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    // Update previous mouse position
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseDown(event) {
    isDragging = true;
}

function onMouseUp(event) {
    isDragging = false;
}

function onMouseMove(event) {
    if (isDragging) {
        cube.rotation.y -= (event.clientX - previousMousePosition.x) * 0.01;
        cube.rotation.x -= (event.clientY - previousMousePosition.y) * 0.01;
    }
}
