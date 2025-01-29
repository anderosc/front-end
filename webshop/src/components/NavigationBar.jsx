import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">

      <Container>
        <Navbar.Brand as={Link} to=" ">WebShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart"> Cart</Nav.Link>


            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/add-product">Add Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-product/">Maintain products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-categories">Maintain categories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-shops">Maintain shops</NavDropdown.Item>


            </NavDropdown>
          </Nav>


          
          <Nav>
          <Nav.Link as={Link} to="/login">Login  </Nav.Link> 
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar