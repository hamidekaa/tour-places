import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='container '>
        <Container >
          <Nav className='navbar-nav mx-auto align-items-center p-3'>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
            <Nav.Link href="#fory">FOR YOU</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href="#vlog">VLOG</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default ColorSchemesExample;