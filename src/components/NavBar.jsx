import {
  Dropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import BotonCreateAccount from "./BotonCreateAccount";
import BotonInicioSesion from "./BotonInicioSesion";

export default function NavBar({ token, user, setToken }) {
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="navbar-style">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="fontNavbar" as={NavLink} to="/nosotros">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link className="fontNavbar" as={NavLink} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link className="fontNavbar" as={NavLink} to="/servicio">
              Servicio Técnico
            </Nav.Link>
            <Nav.Link className="fontNavbar" as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
          {!token && (
            <>
              <BotonCreateAccount setToken={setToken} />
              <BotonInicioSesion setToken={setToken} />
            </>
          )}
          {token && (
            <>
              <Dropdown className="mr-5">
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                {user.nombre}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile"><i class="fas fa-user"></i> Perfil</Dropdown.Item>
                  <Dropdown.Item href="/">
                  <i class="fas fa-shopping-cart"></i> Carrito
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={handleLogOut}>
                  <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
