import {useState} from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import imgcontact from "../Img/Contact_page.jpg";
import Card from "react-bootstrap/Card";
import "../css/Contact.css";
import NavBar from "../components/NavBar";

export default function Contact({token, user, setToken}) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      console.log("🚀 ~ file: FormProducts.jsx ~ line 19 ~ handleSubmit ~ input", input)
      const headers = { "x-auth-token": token };
      const response = await axios.post("http://localhost:4000/api/mensajes", input, {
        headers,
      });
      console.log("🚀 ~ file: FormProducts.jsx ~ line 21 ~ handleSubmit ~ response", response)
      alert("Mensaje enviado.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };
  return (
    <>
    
      <NavBar token={token} user={user} setToken={setToken}/>
    
      <Image src={imgcontact} fluid />

      <Container>
        <h1 align="center">Contáctanos</h1>
        <div className="d-flex flex-wrap mt-5 justify-content-between">
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Teléfonos</Card.Title>

              <Card.Text>
                Tucumán: 0800-0101
                <br></br>
                Córdoba: 0800-1-726-7864
                <br></br>
                Buenos Aires: 0800-5077267
                <br></br>
                Salta: 0800-279-19111
                <br></br>
                Misiones: 0800-0726-7864
                <br></br>
                Mendoza: 0800-299-0033
                <br></br>
                Chubut: 0800-751-2676
                <br></br>
                Atención de 8:00 a 23:00 Hrs, Lunes a Domingo
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Soporte presencial</Card.Title>

              <Card.Text>
                Localiza los centros de servicio O'Tech más cercanos.
              </Card.Text>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Card.Link href="https://www.google.com/maps/place/RollingCode+School/@-26.8367009,-65.2093905,17z/data=!3m1!4b1!4m5!3m4!1s0x94225d3ad7f30f1d:0xf8606cd659b8e3e4!8m2!3d-26.8367009!4d-65.2072018">
                <Button variant="info">Clic Aquí</Button>{" "}
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Tienda online O'Tech</Card.Title>

              <Card.Text>
                Compra en línea los más novedosos smartphones, tablets,
                wearables y accesorios O'Tech.
              </Card.Text>
              <br></br>
              <br></br>
              <br></br>
              <Card.Link href="/">
                <Button variant="info">Clic Aquí</Button>{" "}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
          <h5 className="text-center mt-4">Seguinos en nuestras redes</h5>
            <div className="row justify-content-center my-3">
            <a href="https://www.facebook.com/RollingCodeSchool/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square socialicon"></i></a>
                    <a href="https://www.instagram.com/rollingcodeschool/?hl=es-la" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram socialicon"></i></a>
                    <a href="https://twitter.com/rollingcodeok?lang=es" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter socialicon"></i></a>
                    <a href="https://www.google.com/maps/place/RollingCode+School/@-26.8367009,-65.2093905,17z/data=!3m1!4b1!4m5!3m4!1s0x94225d3ad7f30f1d:0xf8606cd659b8e3e4!8m2!3d-26.8367009!4d-65.2072018" target="_blank" rel="noopener noreferrer"><i class="fas fa-map-marker-alt socialicon"></i></a>
            </div>
        <div className="mt-5">
          <h3 align="center">
            Envianos un mensaje para obtener Asistencia General
          </h3>
        </div>
        <Form noValidate validated={validated} className="mt-5 mb-5" onSubmit={handleSubmit}>
          <Form.Group controlId="Nombre y Apellido">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre y Apellido" name="nombre" required  onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="email" required onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tipo de Consulta</Form.Label>
            <Form.Control as="select" name="tipo" required onChange={handleChange}>
              <option>Web-site</option>
              <option>Empleo</option>
              <option>Consulta</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} name="contenido" required  onChange={handleChange}/>
          </Form.Group>
          <Button className="btn btn-info" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
}
