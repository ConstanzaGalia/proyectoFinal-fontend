import { Form, Modal, Alert } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {getStorageArray, setStorage} from '../utils';



export default function BotonCreateAccount() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showAlert, setShowAlert] = useState(false);
    

    const [input, setInput] = useState({nombreApellido: '', email:'', password:''});
    const handleSubmit = (e) =>{
        e.preventDefault();
        const users = getStorageArray('users');
        const updateUsers =[...users, input];
        setStorage('users', updateUsers);
        setShowAlert(true);
        e.target.reset();
        setTimeout(function () {
            handleClose();
            setShowAlert(false);
        }, 1000);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const user = { ...input, [name]: value };
        setInput(user);
    }

    return (
        <div>
            <Button variant="info" className="my-5" onClick={handleShow} >Crear Cuenta</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Cuenta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                            {showAlert && <Alert variant={'success'}>¡Su registro se realizó con éxito! 🤩</Alert>}
                        <Form.Group>
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control name="nombreApellido" type="text" placeholder="Ingrese su nombre y apellido" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Guardar Cambios
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
