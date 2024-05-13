import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"

function NavbarBootstrap() {
  return (
    <Navbar style={{ backgroundColor: "#8B69C7" }}>
      <Container>
        <Navbar.Brand><Link to='/'><img src={logo} alt="logo" style={{ width: "40px" }} /></Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;