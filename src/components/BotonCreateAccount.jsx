import { Form, Modal, Alert, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { setStorage } from '../utils';
import axios from "axios";



export default function BotonCreateAccount( { setToken } ) {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showAlert, setShowAlert] = useState(false);
    const [input, setInput] = useState({nombre: '', email:'', password:''});


    const handleSubmit = async (e) =>{
        const form = e.currentTarget;
        setValidated(true);
        e.preventDefault();
        if (form.checkValidity() === false) {
            return e.stopPropagation();
        }

        try {
            const { data } = await axios.post('http://localhost:4000/api/usuarios', input);
            console.log(data)
            setStorage('token', data);
            setToken(data);
        } catch (error) {
            console.log(error);
        }

        
    }
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
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
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {showAlert && <Alert variant={'success'}>¡Su registro se realizó con éxito! 🤩</Alert>}
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control 
                            name="nombre" 
                            type="text" 
                            required 
                            placeholder="Ingrese su nombre y apellido" 
                            onChange={handleChange} />
                            <Form.Control.Feedback>Datos Válidos</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            name="email" 
                            type="email" 
                            required 
                            placeholder="Email" 
                            onChange={handleChange} />
                            <Form.Control.Feedback>Datos Válidos</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Contraseña</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control
                            minLength="6"
                            name="password" 
                            type="password"
                            required
                            placeholder="*******"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange} />
                            <Form.Control.Feedback type="invalid">
                            Campo requerido. La contraseña debe tener un mínimo de 6 caracteres!
                            </Form.Control.Feedback>
                            </InputGroup>
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
