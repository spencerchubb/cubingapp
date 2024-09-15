<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="3x3x3 Rubik's Cube Solver">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>3x3x3 Rubik's Cube Solver</title>
</head>

<html>

<style>
#white, #yellow, #blue, #green, #red, #orange {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    animation: none;
    transition: none;
    width: 50px;
    height: 50px;
    box-shadow: inset 0 2px 8px -2px black;

    &:hover {
        filter: brightness(0.6);
    }
}

#white {
    background: #fff;
    color: black;
}

#yellow {
    background: #ffff14;
    color: black;
}

#blue {
    background: #0343df;
}

#green {
    background: #15b01a;
    color: black;
}

#red {
    background: #e50000;
}

#orange {
    background: #f97306;
    color: black;
}

canvas {
    width: 300px;
    height: 300px;
    position: relative;
    border: solid 1px var(--gray-600);
    z-index: 1;
}

@media (max-width: 430px) {
    canvas {
        width: 230px;
        height: 230px;
    }
}
@media (max-width: 360px) {
    canvas {
        width: 180px;
        height: 180px;
    }
}

#rotateButtons {
    display: grid;
    grid-template-columns: auto auto;
    width: fit-content;
    grid-gap: 8px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: none;
        border: solid 1px #666;
        border-radius: 0;
        font-size: 24px;

        &:hover {
            background: #444;
        }
    }
}
</style>

<body>

<div style="
    padding: 16px 0;
    display: flex;
    justify-content: space-evenly;
    max-width: 500px;
    margin: auto;">
    <button id="red" class="colorButton">1/9</button>
    <button id="orange" class="colorButton">1/9</button>
    <button id="yellow" class="colorButton">1/9</button>
    <button id="green" class="colorButton">1/9</button>
    <button id="blue" class="colorButton">1/9</button>
    <button id="white" class="colorButton">1/9</button>
</div>

<div style="display: flex; justify-content: center; align-items: center; padding: 8px; gap: 8px;">
    <canvas id="canvas"></canvas>

    <div id="rotateButtons">
        <button id="rotatez3">↖️</button>
        <button id="rotatex1">↗️</button>

        <button id="rotatey1">⬅️</button>
        <button id="rotatey3">➡️</button>

        <button id="rotatex3">↙️</button>
        <button id="rotatez1">↘️</button>
    </div>
</div>

<div id="errorsDiv" style="padding: 16px;"></div>

<div style="width: 100%; display: flex; justify-content: center;">
    <button
        id="solveButton"
        style="width: 200px; font-size: 20px;"
        disabled>
        Not ready
    </button>
</div>

</body>

<script type="importmap">
{
    "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.js",
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/"
    }
}
</script>

<script type="module">
import * as THREE from 'three';

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

/**
 * @param {THREE.Object3D} obj
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3} axis
 * @param {number} angle
 */
function rotateAroundPoint(obj, point, axis, angle) {
    axis = axis.normalize();
    const current = obj.position.clone();

    const translate = new THREE.Matrix4().makeTranslation(point.x, point.y, point.z);
    const rotate = new THREE.Matrix4().makeRotationAxis(axis, angle);
    const translateBack = new THREE.Matrix4().makeTranslation(-point.x, -point.y, -point.z);

    obj.applyMatrix4(new THREE.Matrix4().multiply(translateBack).multiply(rotate).multiply(translate));
}

/**
 * This function determines where a piece is.
 * This information is then used to know if a piece should be rotated. 
 */
function getAbsolutePosition(object) {
    object.updateMatrixWorld(true);
    const position = new THREE.Vector3();
    position.setFromMatrixPosition(object.matrixWorld);
    console.log(position);
    return position;
}

function renderErrors(errors) {
    if (!errors || errors.length === 0) {
        errorsDiv.innerHTML = "";
        return;
    }
    errorsDiv.innerHTML = `<p style="font-size: 20px; font-weight: bold;">Errors:</p>
    <ul>
        ${errors.map(error => {
            return `<li style="margin: 8px 0;">${error}</li>`;
        }).join("")}
    </ul>`;
}

// Examples:
// adaptPieceName("UBL", "B") -> "BLU"
// adaptPieceName("UBL", "L") -> "LUB"
function adaptPieceName(name, firstLetter) {
    const firstIndex = name.indexOf(firstLetter);
    if (firstIndex === -1) return name;
    return firstLetter + name.slice(firstIndex + 1) + name.slice(0, firstIndex);
}

let selectedColor = "";
const buttons = document.querySelectorAll(".colorButton");
buttons.forEach(button => {
    button.onclick = () => {
        selectedColor = button.id;
        buttons.forEach(button => {
            button.style.outline = "";
        });
        button.style.outline = "solid 3px white";
    }
});

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setPixelRatio(window.devicePixelRatio); // Improve blurriness

// Example of interactivity: https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_cubes.html
// https://threejs.org/docs/index.html?q=ray#api/en/core/Raycaster
let intersects;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const camera = new THREE.PerspectiveCamera(
    75, // fov (average human field of view of both eyes)
    1, // aspect
    0.1, // near
    15, // far
);

// Move camera back and zoom in to decrease warping.
camera.position.z = 10;
camera.zoom = 2.7;
camera.updateProjectionMatrix();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x27272a); // Match cubingapp background color

const pivot = new THREE.Object3D();
pivot.rotation.y = deg2rad(-45);
pivot.rotation.x = deg2rad(37);
scene.add(pivot);

function cubie(x, y, z, name, colorStrings ) {
    const size = 1;

    const geometry = new THREE.BoxGeometry(size, size, size);
    const baseMaterial = new THREE.MeshPhongMaterial({color: colors["base"]});

    const cubie = new THREE.Mesh(geometry, baseMaterial);
    cubie.position.set(x * size, y * size, z * size);
    pivot.add(cubie);

    const padding = size / 15;
    const stickerSize = size - padding * 2;
    const thickness = 0.01;
    const grayMaterial = new THREE.MeshPhongMaterial({color: colors["gray"]});
    if (name.includes("U")) {
        const material = name === "U" ? new THREE.MeshPhongMaterial({color: colors["white"]}) : grayMaterial;
        const geometry = new THREE.BoxGeometry(stickerSize, thickness, stickerSize);
        const sticker = new THREE.Mesh(geometry, material);
        sticker.name = adaptPieceName(name, "U");
        sticker.position.set(0, size / 2, 0);
        cubie.add(sticker);
    }
    if (name.includes("D")) {
        const material = name === "D" ? new THREE.MeshPhongMaterial({color: colors["yellow"]}) : grayMaterial;
        const geometry = new THREE.BoxGeometry(stickerSize, thickness, stickerSize);
        const sticker = new THREE.Mesh(geometry, material);
        sticker.name = adaptPieceName(name, "D");
        sticker.position.set(0, -size / 2, 0);
        cubie.add(sticker);
    }
    if (name.includes("L")) {
        const material = name === "L" ? new THREE.MeshPhongMaterial({color: colors["orange"]}) : grayMaterial;
        const geometry = new THREE.BoxGeometry(thickness, stickerSize, stickerSize);
        const sticker = new THREE.Mesh(geometry, material);
        sticker.name = adaptPieceName(name, "L");
        sticker.position.set(-size / 2, 0, 0);
        cubie.add(sticker);
    }
    if (name.includes("R")) {
        const material = name === "R" ? new THREE.MeshPhongMaterial({color: colors["red"]}) : grayMaterial;
        const geometry = new THREE.BoxGeometry(thickness, stickerSize, stickerSize);
        const sticker = new THREE.Mesh(geometry, material);
        sticker.name = adaptPieceName(name, "R");
        sticker.position.set(size / 2, 0, 0);
        cubie.add(sticker);
    }
    if (name.includes("F")) {
        const material = name === "F" ? new THREE.MeshPhongMaterial({color: colors["green"]}) : grayMaterial;
        const geometry = new THREE.BoxGeometry(stickerSize, stickerSize, thickness);
        const sticker = new THREE.Mesh(geometry, material);
        sticker.name = adaptPieceName(name, "F");
        sticker.position.set(0, 0, size / 2);
        cubie.add(sticker);
    }
    if (name.includes("B")) {
        const material = name === "B" ? new THREE.MeshPhongMaterial({color: colors["blue"]}) : grayMaterial;
        const geometry = new THREE.BoxGeometry(stickerSize, stickerSize, thickness);
        const sticker = new THREE.Mesh(geometry, material);
        sticker.name = adaptPieceName(name, "B");
        sticker.position.set(0, 0, -size / 2);
        cubie.add(sticker);
    }

    return cubie;
}

const colors = {
    "red": "#e50000",
    "orange": "#f97306",
    "yellow": "#ffff14",
    "green": "#15b01a",
    "blue": "#0343df",
    "white": "#fff",
    "gray": "#777",
    "base": "#181818",
}

const cubies = {
    "U": cubie(0, 1, 0, "U"),
    "D": cubie(0, -1, 0, "D"),
    "F": cubie(0, 0, 1, "F"),
    "B": cubie(0, 0, -1, "B"),
    "L": cubie(-1, 0, 0, "L"),
    "R": cubie(1, 0, 0, "R"),

    "UBL": cubie(-1, 1, -1, "UBL"),
    "URB": cubie(1, 1, -1, "URB"),
    "ULF": cubie(-1, 1, 1, "ULF"),
    "UFR": cubie(1, 1, 1, "UFR"),
    "UB": cubie(0, 1, -1, "UB"),
    "UL": cubie(-1, 1, 0, "UL"),
    "UR": cubie(1, 1, 0, "UR"),
    "UF": cubie(0, 1, 1, "UF"),

    "DLB": cubie(-1, -1, -1, "DLB"),
    "DBR": cubie(1, -1, -1, "DBR"),
    "DFL": cubie(-1, -1, 1, "DFL"),
    "DRF": cubie(1, -1, 1, "DRF"),
    "DB": cubie(0, -1, -1, "DB"),
    "DL": cubie(-1, -1, 0, "DL"),
    "DR": cubie(1, -1, 0, "DR"),
    "DF": cubie(0, -1, 1, "DF"),

    "FL": cubie(-1, 0, 1, "FL"),
    "FR": cubie(1, 0, 1, "FR"),
    "BL": cubie(-1, 0, -1, "BL"),
    "BR": cubie(1, 0, -1, "BR"),
}

// Centers are colored by default.
const selections = {
    "U": "white",
    "D": "yellow",
    "F": "green",
    "B": "blue",
    "L": "orange",
    "R": "red",
};

// Set up lighting
const light = new THREE.DirectionalLight(0xFFFFFF /* color */, 4 /* internsity */);
light.position.set(0, 0, 1);
scene.add(light);

renderer.render(scene, camera);

let lastTime = 0;
let rotateSpeed = 2.5;
let rotatePredicate = () => true;
let rotateTarget = 0;
let rotateProgress = 0;
let rotateAxis;
function render(milliseconds) {
    const seconds = milliseconds / 1000;
    const timeDelta = seconds - lastTime;
    lastTime = seconds;
    // console.log(`fps: ${1 / timeDelta}`);

    if (rotateProgress < rotateTarget) {
        let rotateAmount = rotateSpeed * timeDelta;

        // If this rotateAmount would cause overshoot, reduce it.
        // Without this line, the rotation will overshoot a tiny bit each time.
        rotateAmount = Math.min(rotateAmount, rotateTarget - rotateProgress);

        Object.entries(cubies).forEach(([name, cubie]) => {
            if (rotatePredicate(cubie)) {
                rotateAroundPoint(cubie, new THREE.Vector3(0, 0, 0), rotateAxis, rotateAmount);
            }
        });

        rotateProgress += rotateAmount;
    }
    if (rotateProgress >= rotateTarget) {
        rotateProgress = 0;
        rotateTarget = 0;
    }

    raycaster.setFromCamera(pointer, camera);
    intersects = raycaster.intersectObjects(scene.children);

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);

canvas.onpointermove = e => {
    const rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    pointer.x = (x / rect.width - 0.5) * 2;
    pointer.y = -(y / rect.height - 0.5) * 2;
}

canvas.onclick = e => {
    const firstIntersect = intersects[0];
    if (!firstIntersect || !selectedColor) return;

    // If the object doesn't have a name, we assume it's NOT a sticker.
    const name = firstIntersect.object.name;
    if (!name) return;

    const material = new THREE.MeshPhongMaterial({color: colors[selectedColor]});
    firstIntersect.object.material = material;

    selections[name] = selectedColor;

    // Count frequency of each color in selections.
    const counts = {};
    Object.keys(selections).forEach(name => {
        if (selections[name] === "") return;
        counts[selections[name]] = (counts[selections[name]] || 0) + 1;
    });

    let errors = [];

    console.log(counts);
    // Update count in color buttons.
    Object.keys(counts).forEach(color => {
        const button = document.querySelector(`#${color}`);
        button.textContent = `${counts[color]}/9`;
    });

    Object.keys(counts).forEach(color => {
        if (counts[color] > 9) {
            errors.push(`We found ${counts[color]} ${color}s, but there should be 9. Please check the ${color}s!`);
        }
    });

    renderErrors(errors);
}

rotatex1.onclick = () => {
    if (rotateProgress) return;
    rotatePredicate = () => true;
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(-1, 0, 0);
}
rotatex3.onclick = () => {
    if (rotateProgress) return;
    rotatePredicate = () => true;
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(1, 0, 0);
}
rotatey1.onclick = () => {
    if (rotateProgress) return;
    rotatePredicate = () => true;
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, -1, 0);
}
rotatey3.onclick = () => {
    if (rotateProgress) return;
    rotatePredicate = () => true;
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, 1, 0);
}
rotatez1.onclick = () => {
    if (rotateProgress) return;
    rotatePredicate = () => true;
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, 0, -1);
}
rotatez3.onclick = () => {
    if (rotateProgress) return;
    rotatePredicate = () => true;
    rotateTarget = Math.PI / 2
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, 0, 1);
}

function almostEqual(a, b, epsilon=0.001) {
    return Math.abs(a - b) < epsilon;
}

function U1() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.y, 1);
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, -1, 0);
}
function U2() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.y, 1);
    rotateTarget = Math.PI;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, -1, 0);
}
function U3() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.y, 1);
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, 1, 0);
}
function D1() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.y, -1);
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, 1, 0);
}
function D2() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.y, -1);
    rotateTarget = Math.PI;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, 1, 0);
}
function D3() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.y, -1);
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(0, -1, 0);
}
function L1() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.x, -1);
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(1, 0, 0);
}
function L2() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.x, -1);
    rotateTarget = Math.PI;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(1, 0, 0);
}
function L3() {
    if (rotateProgress) return;
    rotatePredicate = (cubie) => almostEqual(cubie.position.x, -1);
    rotateTarget = Math.PI / 2;
    rotateProgress = 0;
    rotateAxis = new THREE.Vector3(-1, 0, 0);
}

document.onkeydown = e => {
    if (e.key === "u") U1();
    if (e.key === "d") D1();
    if (e.key === "l") L1();
}
</script>

<?php include "../../php/gtag.php" ?>

</html>