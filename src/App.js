import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./pages/Home";
import Ships from './pages/ships';
import Community from './pages/community';
import Factions from './pages/factions';

const App = () => {
  return (
    <BrowserRouter id="top">

    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand>ED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="ships">Ships</Nav.Link>
            <Nav.Link href="community">Community</Nav.Link>
            <Nav.Link href="factions">Factions</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.elitedangerous.com/" target="_blank">Official Website</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Something 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something 3</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/ships" element={ <Ships /> } ></Route>
        <Route path="/community" element={ <Community /> } ></Route>
        <Route path="/factions" element={ <Factions /> } ></Route>
      </Routes>


    </BrowserRouter>
  );
}

// let counter = 0
// function diffText() {
    
//     if (counter == 0){
//     text = "Cost: 56,978,180 CR. <br> Landing Pad: Medium. <br> pilot Seats: 2. <br> Hull Mass: 350t. <br> Armour: 468. <br> Shields: 294 MJ. <br> Fuel capacity: 32t. <br> HARDPOINTS: <br> 4x utillity mounts.  2x Medium hardpoints.  3x Large hardpoints. <br> INTERNAL COMPARTMENTS: <br> 1x class 1 compartment.  1x class 2 compartment.  2x class 3 compartments.  1x class 4 compartment.  2x class 5 compartments.  3x class 6 compartments." 
//     document.getElementById("pythontext").innerHTML = text;
//     counter = 1
//     }else {
//         text = "The Python is considered by some to be the most effective balance between firepower, manoeuvrability, and protection currently available among all ships. In addition to ably holding its own against the larger Anaconda in a one-on-one battle through its substantial protection and firepower, the Python is generally agile enough for its size to comfortably deal with smaller combat ships without having to rely on turret mounts. The Python can also serve as a heavily armed freighter in that it can carry 284 T of cargo with a Class 3 Shield Generator fitted, or 292 T with no shield fitted. Additionally, it is the largest cargo capacity of any ship that can dock at Outposts since it utilizes medium landing pads; because of this the Python is fantastic for Community Goals. Although the ship can achieve surprisingly high jump ranges with the proper modules and Engineering, additional mass from cargo can quickly drag this down and significantly lengthen the return leg of a trading loop." 
//     document.getElementById("pythontext").innerHTML = text;
//     counter = 0
//     }}

export default App;


