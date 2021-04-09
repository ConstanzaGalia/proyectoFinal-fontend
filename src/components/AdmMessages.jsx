import Table from "react-bootstrap/Table";
import {useState,useEffect} from "react";
import axios from "axios";

export default function AdmMessages({token}) {
const [mensajes, setMensajes] = useState([]);
useEffect(() => {
  const getMensajes = async () => {
    const headers = {'x-auth-token': token}
    const { data } = await axios.get('http://localhost:4000/api/mensajes', {headers});
    setMensajes(data);
  };
  getMensajes();
}, []);
  return (
    <div className="container my-3">
        <h1>Mensajes</h1>
        <Table striped bordered hover responsive>
              <thead>
                <tr className="text-center">
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Tipo</th>
                  <th>Contenido</th>
                </tr>
              </thead>
              <tbody>
                {
                  mensajes.map((u)=>(
                    <tr key={u._id}>
                      <td className="text-center"> {u.nombre} </td>
                      <td className="text-center"> {u.email} </td>
                      <td className="text-center"> {u.tipo} </td>
                      <td className="text-center"> {u.contenido} </td>
                    </tr>
                  ))
                }
              </tbody>
          </Table>
    </div>
  )
                
}