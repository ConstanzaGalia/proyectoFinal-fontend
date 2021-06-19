import { Button } from "react-bootstrap";
import { Form, Modal, InputGroup, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { setStorage } from "../utils";



export default function BotonInicioSesion({ setToken, user}) {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState({ email: '', password: '' });
    const [validated, setValidated] = useState(false);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        const inputLogin = {...input, [name]: value};
        setInput(inputLogin);
    }

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return e.stopPropagation();
        }
        try {
            const { data } = await axios.post('auth/login', input);
                setShowAlert(true);
            setTimeout(() => {
                setStorage('token', data);
                setToken(data);
            },1500)
        } catch (error) {
            setErrorAlert(true);
            console.log(error);
        }


    }

    return (
        <div>
            <Button className="btnStyle2" onClick={handleShow}>Iniciar Sesión</Button>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {
                        showAlert ? <Alert variant="success">Bienvenido/a a O´tech</Alert> : null
                    }
                    {
                        errorAlert ? <Alert variant="danger">Usuario o contraseña incorrecta</Alert> : null
                    }
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            required 
                            onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Password</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control 
                            name="password" 
                            type="password" 
                            placeholder="******"
                            aria-describedby="inputGroupPrepend" 
                            required
                            onChange={handleChange} />
                            <Form.Control.Feedback type="invalid">
                                Contraseña requerida!
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Aceptar
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
