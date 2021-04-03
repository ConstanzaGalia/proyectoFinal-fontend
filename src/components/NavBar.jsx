import { Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BotonCreateAccount from "./BotonCreateAccount"
import BotonInicioSesion from "./BotonInicioSesion"

export default function NavBar( {token, user, setToken} ) {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="fontNavbar" as={NavLink} to='/nosotros'>Sobre Nosotros</Nav.Link>
                        <Nav.Link className="fontNavbar" as={NavLink} to='/productos'>Productos</Nav.Link>
                        <Nav.Link className="fontNavbar" as={NavLink} to='/servicio'>Servicio Técnico</Nav.Link>
                        <Nav.Link className="fontNavbar" as={NavLink} to='/contacto'>Contacto</Nav.Link>
                    </Nav>
                <BotonCreateAccount token={token} user={user} setToken={ setToken }/>
                <BotonInicioSesion />
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
