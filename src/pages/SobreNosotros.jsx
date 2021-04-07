import React from "react";
import NavBar from "../components/NavBar";
import "../css/sobreNosotros.css";

export default function SobreNosotros() {
  return (
    <>
      <NavBar />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              itaque eius maiores ab ea eaque vel aspernatur sequi rerum autem
              magni mollitia accusamus dolorem, minima deleniti sapiente facere
              architecto corrupti tempore, assumenda aperiam. Totam ullam nihil
              voluptate nobis suscipit laborum molestias consequuntur
              dignissimos exercitationem, officia excepturi quis alias ducimus
              quisquam reiciendis autem dicta! Pariatur eveniet alias nisi minus
              error odit veniam nam, ex quam vero. Nesciunt, est? Odio ipsa
              ipsam velit iste. Aperiam pariatur amet, quas dolorum error,
              fugiat dolore adipisci, praesentium maxime commodi nulla quia
              dignissimos sed iusto eos.
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
