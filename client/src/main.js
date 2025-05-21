import * as BABYLON from '@babylonjs/core';
import 'babylonjs/Materials/standardMaterial';
import 'babylonjs/Lights/hemisphericLight';
import 'babylonjs/Meshes/Builders/sphereBuilder';
import 'babylonjs/Meshes/Builders/groundBuilder';
import * as Colyseus from 'colyseus.js';

// --- Colyseus Client Setup ---
const client = new Colyseus.Client('ws://localhost:2567');

async function connectToRoom() {
  try {
    const room = await client.joinOrCreate('my_room');
    console.log('Joined successfully!', room.sessionId, room.name);

    room.onStateChange((state) => {
      console.log(room.name, 'has new state:', state);
    });

    room.onLeave((code) => {
      console.log('Left room with code:', code);
    });

  } catch (e) {
    console.error('Join error', e);
  }
}

connectToRoom();
// --- End Colyseus Client Setup ---

const canvas = document.getElementById('renderCanvas');
if (!canvas) {
    console.error('Render canvas not found!');
} else {
    const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

    const createScene = function () {
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0.2, 0.3, 0.4, 1.0);

        const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        const sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', { segments: 16, diameter: 2 }, scene);
        sphere.position.y = 1;

        const ground = BABYLON.MeshBuilder.CreateGround('ground1', { width: 6, height: 6, subdivisions: 2 }, scene);

        return scene;
    };

    const scene = createScene();

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    });
}
