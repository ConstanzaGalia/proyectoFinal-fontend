import { Button } from "react-bootstrap";

export default function AdmSidebar() {
  return (
    <div>
      <div className="sideBar d-flex flex-column">
            <div className="abr-my h-100">
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button variant="secondary" className="sidebar-buttons">Productos</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button variant="secondary" className="sidebar-buttons">Usuarios</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
