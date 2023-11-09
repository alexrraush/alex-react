import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Cartwidget} from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

function NavBar(){
    return(
      <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Tienda</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className={({isActive})=>isActive ? 'btn btn-primary': 'btn'} to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? 'btn btn-primary': 'btn'} to= '/categoria/implementos'>
                    Implementos
                  </NavLink>
                 <NavLink className={({isActive})=>isActive ? 'btn btn-primary': 'btn'} to= '/categoria/tractores'>
                    Tractores
                 </NavLink>

                
              </Nav>
              <Nav>
                <Link to='/'>
                  <Cartwidget/>
                </Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )

    
  }

  export default NavBar