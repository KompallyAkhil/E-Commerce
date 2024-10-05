import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductsNav = () => {
    return (<>
        <Nav fill variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} style={{fontFamily:"cursive",color:"black",fontSize:"20px"}} to="/Electronics">Electronics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} style={{fontFamily:"cursive",color:"black",fontSize:"20px"}} to="/TV&Appliances">TV's & Appliances</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} style={{fontFamily:"cursive",color:"black",fontSize:"20px"}} to="/Fashion">Fashion</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} style={{fontFamily:"cursive",color:"black",fontSize:"20px"}} to="/Home&Kitchen">
                    Home & Kitchen
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} style={{fontFamily:"cursive",color:"black",fontSize:"20px"}} to="/Furniture">Furniture</Nav.Link>
            </Nav.Item>
        </Nav>
    </>)
}
export default ProductsNav;