import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
function Navigation() {
  const { cartItems } = useCart()
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home" className="text-white">🛒 Shopping made Easy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>
            <Nav.Link as={Link} to="/mycart" className="text-white">My Cart 🛒<sup>{cartItems.length}</sup></Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;