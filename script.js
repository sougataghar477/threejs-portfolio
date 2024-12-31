import * as THREE from 'three';

// Scene for Three.js container
const threejsContainer = document.querySelector(".three-js-container");
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(75, threejsContainer.offsetWidth / threejsContainer.offsetHeight, 0.1, 1000);
const renderer1 = new THREE.WebGLRenderer();
threejsContainer.appendChild(renderer1.domElement);
renderer1.setSize(threejsContainer.offsetWidth, threejsContainer.offsetHeight);

// Add sphere to scene1
const textureLoader1 = new THREE.TextureLoader();
const moonTexture1 = textureLoader1.load('https://cdn.discordapp.com/attachments/791564665070420002/1323597501248573460/image.png?ex=677517bb&is=6773c63b&hm=09a7d9ab7362b5ca3cdde04512638952f91718acef6713e6c01158899872ceb4&');
const geometry1 = new THREE.SphereGeometry(2, 32, 32);
const material1 = new THREE.MeshBasicMaterial({ map: moonTexture1 });
const sphere1 = new THREE.Mesh(geometry1, material1);
scene1.add(sphere1);
sphere1.position.set(-10, 0, 0); // Position sphere1
camera1.position.z = 10;

// Add stars to scene1
const starsGeometry1 = new THREE.BufferGeometry();
const starsMaterial1 = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, opacity: 0.8, transparent: true });
const positions1 = [];
for (let i = 0; i < 10000; i++) {
    positions1.push(Math.random() * 2000 - 1000); // x
    positions1.push(Math.random() * 2000 - 1000); // y
    positions1.push(Math.random() * 2000 - 1000); // z
}
starsGeometry1.setAttribute('position', new THREE.Float32BufferAttribute(positions1, 3));
const stars1 = new THREE.Points(starsGeometry1, starsMaterial1);
scene1.add(stars1);

// Scene for projects container
const projectsContainer = document.querySelector(".projects-section");
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, projectsContainer.offsetWidth / projectsContainer.offsetHeight, 0.1, 1000);
const renderer2 = new THREE.WebGLRenderer();
projectsContainer.appendChild(renderer2.domElement);
renderer2.setSize(projectsContainer.offsetWidth, projectsContainer.offsetHeight);

// Add sphere to scene2
const moonTexture2 = textureLoader1.load('https://cdn.discordapp.com/attachments/791564665070420002/1323597160780005376/image.png?ex=6775176a&is=6773c5ea&hm=4c111dff69940c02ae68e31f48c01d2c76956bdcbd440d5c8b4019e3dbd11cbd&');
const geometry2 = new THREE.SphereGeometry(2, 32, 32);
const material2 = new THREE.MeshBasicMaterial({ map: moonTexture2 });
const sphere2 = new THREE.Mesh(geometry2, material2);
scene2.add(sphere2);
sphere2.position.set(5, 0, 0); // Position sphere2
camera2.position.z = 10;

// Add stars to scene2
const starsGeometry2 = new THREE.BufferGeometry();
const starsMaterial2 = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, opacity: 0.8, transparent: true });
const positions2 = [];
for (let i = 0; i < 10000; i++) {
    positions2.push(Math.random() * 2000 - 1000); // x
    positions2.push(Math.random() * 2000 - 1000); // y
    positions2.push(Math.random() * 2000 - 1000); // z
}
starsGeometry2.setAttribute('position', new THREE.Float32BufferAttribute(positions2, 3));
const stars2 = new THREE.Points(starsGeometry2, starsMaterial2);
scene2.add(stars2);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate sphere1 and sphere2
    sphere1.rotation.y += 0.01;
    // sphere1.rotation.z += 0.01;

    sphere2.rotation.y += 0.01;
    // sphere2.rotation.x += 0.001;

    // Update star opacity for blinking effect
     
    for (let i = 0; i < 10000; i++) {
        const opacity = Math.abs(Math.sin(Date.now() * 0.5));
        starsMaterial1.opacity = opacity;
        starsMaterial2.opacity = opacity;
    }
  

    // Render both scenes
    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
}

animate();
