import React from 'react';
import * as THREE from 'three';

var OrbitControls = require('three-orbit-controls')(THREE)
export default class SolarSystem extends React.Component {
  constructor(props) {
    super(props);
    //this.render = this.render.bind(this);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    // scene 
    this.scene = new THREE.Scene();
    // camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.three.appendChild(this.renderer.domElement);
    // light
    this.directionalLight = new THREE.DirectionalLight(0x9090aa);
    this.directionalLight.position.set(-10, 10, -10).normalize();
    this.scene.add(this.directionalLight);

    this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    this.hemisphereLight.position.set(1, 1, 1);
    this.scene.add(this.hemisphereLight);
    // OBJ
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.15 });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
    this.camera.position.z = 5;
    // orbit 
    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    this.orbit.update();
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentWillUpdate() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  };
  render() {
    return (
      <div className="solarsystem" ref={(planet) => this.three = planet}></div>
    );
  }
}
// import React from 'react'
// import axios, { post } from 'axios';
// import { Container, Row, Col } from 'reactstrap';
// class SolarSystem extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       image: ''
//     }
//   }

//   onChange(e){
//     let files = e.target.files; 
//     console.log(files);
//     let reader = new FileReader(); 
//     reader.readAsDataURL(files[0]); 
//     reader.onload=(e)=>{
//       console.warn("Data", e.target.result);
//     }
//     //console.log(e.target.result);
//     //console.log(files.document.target);

//   }

//   render() {
//     return (
//       <Container>
//         <Row className="aboutme">
//           <Col>
//             <form onSubmit={this.onFormSubmit}>
//               <h1>File Upload</h1>
//               <input type="file" name="file" onChange={(e)=>this.onChange(e)} />
//               <button type="submit">Upload</button>
//             </form>
//           </Col>
//         </Row>
//       </Container>

//     )
//   }
// }



// export default SolarSystem