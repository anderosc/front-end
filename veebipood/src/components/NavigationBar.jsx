import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function NavigationBar() {
    const { t, i18n } = useTranslation();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/"  > <img className= 'pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" /></Navbar.Brand>

        <Navbar.Brand as={Link} to="/">yo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/apihome">API-{t("plural")}</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/arrays">Arrays</Nav.Link>
            <Nav.Link as={Link} to="/ostukorv">Ostukorv</Nav.Link>
            <Nav.Link as={Link} to="/osta-kinkekaart">Kinkekaart</Nav.Link>
            <Nav.Link as={Link} to="/seaded">Seaded</Nav.Link>
            <Nav.Link as={Link} to="/kalkulaator">Kalkulaator</Nav.Link>
            <Nav.Link as={Link} to="/pilt">Pilt</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>



          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/login" > Log In </Nav.Link>
            <Nav.Link as={Link} to="/registeeru"  >  Signup  </Nav.Link>
          </Nav>
          <button onClick={() => i18n.changeLanguage("et")}>Eesti keel</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;