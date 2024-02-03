// Stephanie Pearl F. Virtudazo
// Computer Graphics Computing Module 2 Quiz 3

// Scene
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

// Renderer and Camera 
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

// DVD Object
const dvdGeometry = new THREE.PlaneGeometry(0.4, 0.3);
const dvdMaterial = new THREE.MeshBasicMaterial();
const dvd = new THREE.Mesh(dvdGeometry, dvdMaterial);
scene.add(dvd);

// Initial position and properties of the object
dvd.position.set(0, 0, 0);
let velocity = new THREE.Vector2((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01);
let bouncesLeft = 8;
dvd.material.color.setRGB(Math.random(), Math.random(), Math.random());

// Animation
function animate() {
    requestAnimationFrame(animate);

    dvd.position.x += velocity.x;
    dvd.position.y += velocity.y;

    const boxWidth = dvdGeometry.parameters.width * dvd.scale.x;
    const boxHeight = dvdGeometry.parameters.height * dvd.scale.y;

    if (dvd.position.x + boxWidth / 2 > 1 || dvd.position.x - boxWidth / 2 < -1) {
        velocity.x *= -1;
        dvd.scale.y -= 0.1;
        dvd.scale.x -= 0.1;
        dvdMaterial.color.setRGB(Math.random(), Math.random(), Math.random()); // Change color
        bouncesLeft--;
    }

    if (dvd.position.y + boxHeight / 2 > 1 || dvd.position.y - boxHeight / 2 < -1) {
        velocity.y *= -1;
        dvd.scale.y -= 0.1;
        dvd.scale.x -= 0.1;
        dvdMaterial.color.setRGB(Math.random(), Math.random(), Math.random()); // Change color
        bouncesLeft--;
    }

    if (bouncesLeft <= 0) {
        console.log("Object Not Found");
        dvd.visible = false;
    }

    renderer.render(scene, camera);
}

animate();
