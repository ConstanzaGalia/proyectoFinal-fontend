import { Button } from "react-bootstrap";
import { Form, Modal, Alert, InputGroup } from "react-bootstrap";
import { useState } from "react";
import {getStorageArray, setStorage} from '../utils';
import { useHistory } from "react-router-dom";
import axios from "axios";



export default function BotonInicioSesion({ setToken }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);


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
            const { data } = await axios.post('http://localhost:4000/api/auth/login', input);
            localStorage.setItem('token', data);
            setToken(data);
            window.location.replace('/');
        } catch (error) {
            console.log(error);
        }


        // if (findUser) {
        //     setStorage('userLogged', findUser);
        //     setShowAlert(true);
        //     e.target.reset();

        //     setTimeout(function () {
        //         handleClose();
        //         setShowAlert(false);
        //         history.push('/user')
        //     }, 1500);

        // } else if (adminLogin){
        //     setShowAdmin(true);
        //     e.target.reset();

        //     setTimeout(function () {
        //         handleClose();
        //         setShowAdmin(false);
        //         history.push('/admin')
        //     }, 1500);
        // }
    }

    return (
        <div>
            <Button variant="secondary" className="my-5 float-right" onClick={handleShow}>Iniciar Sesión</Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Inicio Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {showAlert && <Alert variant={'success'}>¡Inicio de sesión exitoso! 🤩</Alert>}
                        {showAdmin && <Alert variant={'info'}>¡Bienvenido Administrador! 🤩</Alert>}
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            required 
                            onChange={handleChange} />
                        <Form.Control.Feedback>Email Válido!</Form.Control.Feedback>
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
