import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import "./animation.css"

const ThreeScene = ({ className }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set the background color
    sceneRef.current.appendChild(renderer.domElement);

    // Add an ambient light to illuminate the sphere from all sides
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Create a sphere's wireframe using WireframeGeometry
    const geometry = new THREE.SphereGeometry(1.7, 50, 50);

    // Create a material for the sphere with the desired color and wireframe rendering
    const material = new THREE.MeshBasicMaterial({
      color: 0x67aeca, // Color in hexadecimal format
      wireframe: true,
    });

    // Create a mesh using the geometry and material
    const sphere = new THREE.Mesh(geometry, material);

    // Position and scale the sphere
    sphere.position.x = 3.2;
    sphere.scale.set(2, 2, 2); // Increase the scale to make it bigger

    scene.add(sphere);

    // Create a rotation animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere along the X-axis only
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div className={className} ref={sceneRef}></div>;
};

export default ThreeScene;
