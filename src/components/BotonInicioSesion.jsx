import { Button } from "react-bootstrap";
import { Form, Modal, Alert } from "react-bootstrap";
import { useState } from "react";
import {getStorageArray, setStorage} from '../utils';
import { useHistory } from "react-router-dom";



export default function BotonInicioSesion() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);


    const [input, setInput] = useState({ email: '', password: '' });
    const admin = {email: 'admin@admin', password:'admin1234'};

    const handleChange = (e) =>{
        const { name, value } = e.target;
        const inputLogin = {...input, [name]: value};
        setInput(inputLogin);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const users = getStorageArray('users')
        const findUser = users.find(user => user.email === input.email && user.password === input.password);
        const adminLogin = admin.email === input.email && admin.password === input.password;        
        if (findUser) {
            setStorage('userLogged', findUser);
            setShowAlert(true);
            e.target.reset();

            setTimeout(function () {
                handleClose();
                setShowAlert(false);
                history.push('/user')
            }, 1500);

        } else if (adminLogin){
            setShowAdmin(true);
            e.target.reset();

            setTimeout(function () {
                handleClose();
                setShowAdmin(false);
                history.push('/admin')
            }, 1500);
        }
    }

    return (
        <div>
            <Button variant="secondary" className="my-5 float-right" onClick={handleShow}>Iniciar Sesión</Button>

            <Modal show={show} onHide={handleClose} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {showAlert && <Alert variant={'success'}>¡Inicio de sesión exitoso! 🤩</Alert>}
                        {showAdmin && <Alert variant={'info'}>¡Bienvenido Administrador! 🤩</Alert>}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
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
