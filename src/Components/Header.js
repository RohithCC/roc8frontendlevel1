import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#343a40"}}>
      <Container>
        <Navbar.Brand href="/home" id='text1'>Travel bae</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home" id='text'>Home</Nav.Link>
            <Nav.Link href="/destination" id='text'>Destination</Nav.Link>
            <Nav.Link href="/reports" id='text'>report</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;