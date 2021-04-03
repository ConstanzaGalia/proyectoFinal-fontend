import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AdmSidebar() {
  return (
    <div>
      <div className="sideBar d-flex flex-column">
            <div className="abr-my h-100">
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={NavLink} to='/admin/products' variant="dark" className="sidebar-buttons">Productos</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={NavLink} to='/admin/users' variant="dark" className="sidebar-buttons">Usuarios</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
