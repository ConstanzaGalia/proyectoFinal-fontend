import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AdmNavtop() {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Panel Administración</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="mr-auto d-md-none">
            <Nav.Link as={NavLink} to='/admin/products'>Alta de Productos</Nav.Link>
            <Nav.Link as={NavLink} to='/admin/productslist'>Listado de Productos</Nav.Link>
            <Nav.Link as={NavLink} to='/admin/users'>Usuarios</Nav.Link>
            <Nav.Link as={NavLink} to='/admin/messages'>Mensajes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={handleLogOut} className="btn btn-light btn-back-login"><i className="fas fa-sign-out-alt"></i></Button>
      </Navbar>
    </div>
  );
}
