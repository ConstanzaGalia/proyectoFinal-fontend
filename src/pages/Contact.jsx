import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import imgcontact from "../Img/Contact_page.jpg";
import Card from "react-bootstrap/Card";
import "../css/Contact.css";
import NavBar from "../components/NavBar";

export default function Contact({token, user, setToken}) {
  return (
    <>
    
      <NavBar token={token} user={user} setToken={setToken}/>
    
      <Image src={imgcontact} fluid />

      <Container>
        <h1 align="center">Contáctanos</h1>
        <div className="d-flex flex-wrap mt-5 justify-content-between">
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Llámanos</Card.Title>

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
                Localiza los centros de servicio O´Tech más cercanos.
              </Card.Text>
              <Card.Link href="#">
                <Button variant="dark">Clic Aquí</Button>{" "}
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Tienda online O´Tech</Card.Title>

              <Card.Text>
                Compra en línea los más novedosos smartphones, tablets,
                wearables y accesorios O´Tech.
              </Card.Text>
              <Card.Link href="#">
                <Button variant="dark">Clic Aquí</Button>{" "}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="mt-5">
          <h3 align="center">
            Envianos un mensaje para obtener Asistencia General
          </h3>
        </div>
        <Form className="mt-5">
          <Form.Group controlId="Nombre y Apellido">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre y Apellido" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tipo de Consulta</Form.Label>
            <Form.Control as="select">
              <option>Web-site</option>
              <option>Empleo</option>
              <option>Consulta</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Si usted es un cliente B2B, por favor marque la casilla"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
}