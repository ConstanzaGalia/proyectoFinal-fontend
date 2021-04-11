import React from "react";
import NavBar from "../components/NavBar";
import "../css/sobreNosotros.css";

export default function SobreNosotros({token, user, setToken}) {
  return (
    <>
      <NavBar token={token} user={user} setToken={setToken}/>
      <div className="container my-5 ">
        <h2 className="text-center">Sobre Nosotros</h2>
        <div className="d-flex flex-wrap mt-3 justify-content-center">
          <div className="mb-4">
            <img
              className="imagenSN"
              src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
              alt=""
            />
          </div>

          <div className="SNtexto pl-lg-5 text-justify">
            <p>
            O´Tech se compromete a cumplir las leyes y regulaciones locales y a aplicar un código de conducta mundial estricto para todos nuestros empleados. Creemos que la administración 
            ética no es solo una herramienta para hacer frente a los rápidos cambios del entorno comercial mundial, sino que también sirve como vehículo para desarrollar la confianza 
            con las diversas partes interesadas, que incluyen los clientes, los accionistas, los empleados, los socios comerciales y las comunidades locales. Con el objetivo de 
            convertirse en una de las empresas más éticas del mundo, O´Tech continúa capacitando a sus empleados y utilizando sistemas de monitoreo, al mismo tiempo que implementa 
            una administración corporativa justa y transparente.
            </p>
          </div>
        </div>

        <h2 className="text-center mt-5">Nuestros atletas</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="mb-4 px-3 imagenNA">
            <img className="img-fluid"
              src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
              alt=""
            />
            <h4 className="text-center mt-3 mb-2">Coco Galía</h4>
            <p className="text-justify">
              COCO'S DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam perferendis dolore ut. Aperiam, voluptates quidem culpa veniam animi harum!
            </p>
          </div>
          <div className="mb-4 px-3 imagenNA">
            <img className="img-fluid"
              src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
              alt=""
            />
            <h4 className="text-center mt-3 mb-2">Coco Galía</h4>
            <p className="text-justify">
              COCO'S DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam perferendis dolore ut. Aperiam, voluptates quidem culpa veniam animi harum!
            </p>
          </div>
          <div className="mb-4 px-3 imagenNA">
            <img className="img-fluid"
              src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
              alt=""
            />
            <h4 className="text-center mt-3 mb-2">Juani</h4>
            <p className="text-justify">
              COCO'S DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam perferendis dolore ut. Aperiam, voluptates quidem culpa veniam animi harum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
