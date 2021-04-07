import axios from "axios";
import { Redirect } from "react-router"
import NavBar from "../components/NavBar"
import { beforeUpload, getBase64 } from '../utils';


const exampleImage = 'https://img2.freepng.es/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'


export default function Profile({token, user, setToken}) {
  if (!token) {
    return <Redirect to="/" />
  }

  const onChangeImg = async (e) => {
    const img = e.target.files[0];
    if (!beforeUpload(img)) return;
    const base64 = await getBase64(img);
    // setImage(base64);
    console.log('onChangeImg - base64', base64);
    axios
        .put(
            'http://localhost:4000/api/usuarios/usuarioLogueado',
            { imagen: base64 },
            {
                headers: { 'x-auth-token': token },
            }
        )
        .then((response) => console.log(response.data));
};


  return (
    <>
      <NavBar token={token} user={user} setToken={setToken} />
      <div className="container text-center">
        <h3 className="my-5">Mi Perfil: {user.nombre} </h3>
        <div className="d-flex justify-content-center align-items-end ml-4 m-2">
                <img
                    src={user.imagen || exampleImage}
                    alt="profile"
                    width="200"
                    className="rounded-circle"
                    style={{ border: '2px solid black' }}
                />
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                <i class="far fa-edit"></i>
                </label>
                <input id="file-input" className="d-none" accept="image/png, image/jpeg" type="file" onChange={onChangeImg}/>
            </div>
      </div>
    </>
  )
}
