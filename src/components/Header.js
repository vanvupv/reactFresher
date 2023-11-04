import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
 

const Header = (props) => {
    const location = useLocation();  
    console.log(">>> Check Location: ",location); 
     
    return(
    <> 
    <Navbar expand="lg"> 
      <Container>
        <Navbar.Brand href="/">HoiDanIT App</Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={location.pathname}> 
              <NavLink className="nav-link" to="/" >Home</NavLink> 
              <NavLink className="nav-link" to="/users">Manager Users</NavLink> 
          </Nav> 
          <Nav> 
            <NavDropdown title="Setting" id="basic-nav-dropdown">  
              <NavLink className="nav-link" to="/login">Login</NavLink> 
              <NavLink className="nav-link" to="/logout">Logout</NavLink> 
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Header; 