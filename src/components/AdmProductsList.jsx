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
                <tr className="text-center">
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Descripción</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((p)=>(
                    <tr key={p._id}>
                      <td className="text-center"> {p.name} </td>
                      <td className="text-center"> {p.brand} </td>
                      <td className="text-center"> {p.category} </td>
                      <td className="text-center"> {p.price} </td>
                      <td className="text-center"> {p.description} </td>
                      <td className="text-center"> <button type="button" class="btn btn-danger mr-2"><i class="fas fa-trash-alt"></i></button><button type="button" class="btn btn-secondary"><i class="fas fa-edit"></i></button></td>
                    </tr>
                  ))
                }
              </tbody>
          </Table>
    </div>
  )
                
}
