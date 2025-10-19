/* All imports Brings in Three.js core, the OrbitControls helper, GSAP 
for animations, and lil-gui (dat.GUI-style) for UI controls.*/
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' // Can rotate your by using mouse
import gsap from 'gsap'
import * as dat from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'



/* Things to remember 
X-axis → left (−) and right (+)
Y-axis → down (−) and up (+)
Z-axis → forward (−, into screen) and backward (+, toward camera)

In your game:
Donut jumps on Y-axis.
Cubes move along X-axis.
Z-axis controls depth. */


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl') // Selects the <canvas class="webgl"> element where WebGL draws.

// UI Elements
const startScreen = document.getElementById('startScreen');
const gameUI = document.getElementById('gameUI');
const gameOverEl = document.getElementById('gameOver');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('finalScore');

// Game State
let gameState = 'start'; // 'start', 'playing', 'gameOver'
let score = 0;

// Scene
const scene = new THREE.Scene()

// Load and apply game background image
const backgroundLoader = new THREE.TextureLoader();
backgroundLoader.load('game background.jpg', (texture) => {
    scene.background = texture;
});


/* This block introduces a Loading Manager, whose purpose is to monitor and handle 
the process of loading assets (textures, models, fonts, etc.) in Three.js.*/
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('loading started')
}
loadingManager.onLoad = () => {
    console.log('loading finished')
}
loadingManager.onProgress = () => {
    console.log('loading progressing')
}
loadingManager.onError = () => {
    console.log('loading error')
}


// Tells the TextureLoader to report all its load events to that manager.
const textureLoader = new THREE.TextureLoader(loadingManager)
const colorTexture = textureLoader.load('textures/minecraft.png')

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)


// Load the font
const fontLoader = new FontLoader()
fontLoader.load('fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry('Welcome to Three.js Game', {
        font: font,
        size: 0.5,      // font size
        height: 0.1,    // extrusion thickness
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
    })

    // Material for the text
    const textMaterial = new THREE.MeshBasicMaterial({ color: 'red' })

    const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    scene.add(textMesh)

    // Position text in the scene
    textMesh.position.set(-5, .5, 1) // X=0 center, Y=2 up, Z=1 closer to camera
    textMesh.lookAt(camera.position) // make it face the camera

})



const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)


// For pixelated look (low res like minecraft (minecraft.png))
colorTexture.generateMipmaps = false
colorTexture.minFilter = THREE.NearestFilter

// Material = for texture purposes
const material = new THREE.MeshBasicMaterial({ map: colorTexture })


// Obstacles section the cubes
const obstacles = []

// Cube creation
for (let i = 0; i < 5; i++) { //<-- increase condition "1<5" to add more cubes
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
    const material = new THREE.MeshBasicMaterial({ color: 'red' })
    const cube = new THREE.Mesh(geometry, material)

    //FORMAT of the math cube.position.x = <start> + i * <spacing>
    cube.position.x = 2 + i * 5 // spread them out along x-axis (increase the i * n to to make the spaces of cubes far apart from each other.)
    cube.position.y = -0.5      // keeps them on the ground
    scene.add(cube)
    obstacles.push(cube)        // store in array for animation
}



// Donut declaration
const donut = new THREE.TorusGeometry(1, 0.4, 16, 100)
// default color
const parameters = { color: 'yellow' }

//mesh, means: “Create a renderable 3D object using the donut shape and the material we defined.”
const mesh = new THREE.Mesh(donut, material)
scene.add(mesh)

mesh.position.x = -3 // Moves the donut to the left along the X-axis.
mesh.scale.set(0.5, 0.5, 0.5) // make the donut half its size

// Spin function 
const spin = {
    spin: () => {
        gsap.to(mesh.rotation, {
            duration: 1,
            y: mesh.rotation.y + Math.PI * 2
        })
    }
}

let isJumping = false
function jump() {
    if (isJumping || gameState !== 'playing') return // prevent double jump and only jump when playing

    isJumping = true

    gsap.to(mesh.position, {
        y: 1,
        duration: .7,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            mesh.position.y = 0
            isJumping = false // allow next jump
        }
    })
}

// Keyboard controls
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        jump();
    }
});

// Game functions
function startGame() {
    gameState = 'playing';
    score = 0;
    scoreEl.textContent = score;

    startScreen.style.display = 'none';
    gameUI.style.display = 'block';
    gameOverEl.style.display = 'none';

    // Reset donut position
    mesh.position.y = 0;

    // Reset obstacles
    obstacles.forEach((cube, i) => {
        cube.position.x = 2 + i * 5;
    });
}

function endGame() {
    gameState = 'gameOver';
    finalScoreEl.textContent = score;

    gameOverEl.style.display = 'flex';
    gameUI.style.display = 'none';
}

// Button event listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// GUI Controls
const gui = new dat.GUI()
gui.add(mesh.material, 'wireframe').name('Wireframe')
gui.addColor(parameters, 'color').name('Color').onChange(() => {
    mesh.material.color.set(parameters.color)

})
gui.add(spin, 'spin').name('spin donut')                         // Spin animation
gui.add({ jump }, 'jump').name('Jump Donut')                     // jump animation






window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// fullscreen 
window.addEventListener('dblclick', () =>
    !document.fullscreenElement
        ? canvas.requestFullscreen()
        : document.exitFullscreen()
);


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    // Keep donut on ground if very close
    if (mesh.position.y < 0) {
        mesh.position.y = 0
    }


    // Update controls
    controls.update()

    // Only move obstacles and check collisions when playing
    if (gameState === 'playing') {
        // Move all obstacles
        obstacles.forEach(cube => {
            cube.position.x -= 0.03 // move left

            // Reset position when off-screen and increase score
            if (cube.position.x < -5) {
                const lastCube = obstacles.reduce((prev, current) =>
                    prev.position.x > current.position.x ? prev : current
                )

                cube.position.x = lastCube.position.x + 5 // keep distance (5 = spacing)

                // Increase score
                score++;
                scoreEl.textContent = score;
            }
        })

        // Game over function with smaller collider
        const donutBox = new THREE.Box3().setFromCenterAndSize(
            mesh.position,
            new THREE.Vector3(0.6, 0.6, 0.6)
        );

        for (const cube of obstacles) {
            const cubeBox = new THREE.Box3().setFromObject(cube);

            if (donutBox.intersectsBox(cubeBox)) {
                endGame();
                break;
            }
        }
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()