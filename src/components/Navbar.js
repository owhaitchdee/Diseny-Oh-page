import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/header.png';


function DONav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={Logo} alt='logo' style={{height:'45px',paddingRight:'10px',verticalAlign:'middle'}} /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#link" >Gallery</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://owhaitchdee.github.io/Furlinks_UI/">Furlinks</NavDropdown.Item>
              <NavDropdown.Item href="https://owhaitchdee.github.io/taalbatangas/">
                Taal Batangas
              </NavDropdown.Item>
              <NavDropdown.Item href="http://kabataan.ph">Kabataan PH</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://gelogabz.github.io/WD20P-Mini-Project-2/">
                LEAVENOTHING.ORG
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DONav;