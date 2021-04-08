import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function AdmProductsList({token}) {
  const [users, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const headers = {'x-auth-token': token}
      const { data } = await axios.get('http://localhost:4000/api/products', {headers});
      setProducts(data);
    };
    getProducts();
  }, []);
  
  return (
    <div className="container my-3">
        <h1>Productos</h1>

        <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((p)=>(
                    <tr key={p._id}>
                      <td> {p.name} </td>
                      <td> {p.brand} </td>
                      <td> {p.category} </td>
                      <td> {p.price} </td>
                      <td> {p.description} </td>
                    </tr>
                  ))
                }
              </tbody>
          </Table>
    </div>
  )
                
}
