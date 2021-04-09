import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function AdmUsers({token}) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const headers = {'x-auth-token': token}
      const { data } = await axios.get('http://localhost:4000/api/usuarios', {headers});
      setUsers(data);
    };
    getUsers();
  }, []);
  
  return (
    <div className="container my-3">
        <h1>Usuarios</h1>

        <Table striped bordered hover responsive>
              <thead>
                <tr className="text-center">
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((u)=>(
                    <tr key={u._id}>
                      <td className="text-center"> {u.nombre} </td>
                      <td className="text-center"> {u.email} </td>
                      <td className="text-center"> {u.rol} </td>
                      <td className="text-center"> <button type="button" class="btn btn-danger mr-2"><i class="fas fa-trash-alt"></i></button><button type="button" class="btn btn-secondary"><i class="fas fa-edit"></i></button></td>
                    </tr>
                  ))
                }
              </tbody>
          </Table>
    </div>
  )
                
}
