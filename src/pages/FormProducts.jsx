import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import axios from "axios";

export default function FormProducts({ token }) {
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
      const headers = { "x-auth-token": token };
      await axios.post("http://localhost:4000/api/productos", input, {
        headers,
      });
      alert("¡Producto publicado!");
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
      <NavBar />
      <div className="container my-5 ">
      <h2 className="text-center">Alta de productos</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="card mt-5 p-5">
          <Form.Group controlId="validationCustom02">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="titulo"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Nombre del producto"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              name="imagen"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="http://imagen.jpg"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              name="marca"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Marca"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              name="categoría"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Categoría"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              name="precio"
              onChange={(e) => handleChange(e)}
              required
              type="number"
              placeholder="Precio"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              name="descripcion"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Descripción"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Button type="submit" className="mx-auto">
              Publicar producto
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}
