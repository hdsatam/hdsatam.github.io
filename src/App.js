import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './intro.js';
import About from './about.js';
import Project from './projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>H S</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/about">About</Nav.Link>
            <Nav.Link href="/#/projects">Projects</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Project}/>
          <Route path="/" component={Intro}/>
        </Switch>


        {/* <a id="intro"><Intro/></a>
        <a id="about"><About/></a>
        <a id="projects"><Project/></a> */}
      </div>
    </HashRouter>
  );
}

export default App;
