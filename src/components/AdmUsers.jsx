import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function AdmUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get('http://localhost:4000/api/usuarios');
      setUsers(data);
    };
    getUsers();
  }, []);
  
  return (
    <div className="container my-3">
        <h1>Usuarios</h1>
        <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((u)=>(
                    <tr>
                      <td key={u._id}>1</td>
                      <td> {u.Nombre} </td>
                      <td> {u.email} </td>
                      <td> {u.rol} </td>
                    </tr>
                  ))
                }
              </tbody>
          </Table>
    </div>
  )
                
}
