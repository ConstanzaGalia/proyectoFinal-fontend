import ReactPlayer from "react-player";

export default function GarminW() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <h2>Garmin Fenix 6S</h2>
          </div>
          <h2>Piensa en algo mejor, no más grande</h2>
          <p>
          Los relojes multideporte de tamaño compacto de la serie fenix 6S te permiten complementar tus sesiones de entrenamiento con mapas, música, 
          control del ritmo y mucho más.
          </p>
          <h4>Calidad a través del diseño</h4>
          <p>
          El diseño, resistente a la vez que sofisticado, cuenta con una pantalla de 1,2" siempre activa, bisel de acero inoxidable o con revestimiento de DLC 
          y una construcción que cumple con el estándar militar estadounidense
          </p>
          <h3>Métricas de rendimiento</h3>
          <p>Consulta métricas de entrenamiento avanzadas que incluyen dinámica de carrera1, VO2 máximo adaptado al calor y la altitud,
            control de recuperación y mucho más.</p>
        </div>

        <div className="col-md-6">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=U7bEVQndGFg&t=1s&ab_channel=GarminEMEA"
            className="react-player"
            playing='false'
            width="600px"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
}
