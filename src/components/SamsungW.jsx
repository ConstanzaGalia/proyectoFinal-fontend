import ReactPlayer from 'react-player'

export default function SamsungW() {
  return (
    
      <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <h2>Samsung Galaxy Watch</h2>
          </div>
          <h2>Un reloj como nunca antes lo viste</h2>
          <p>Descubrí la siguiente generación de Galaxy Watch Active. El nuevo Galaxy Watch Active se destaca del resto de relojes deportivos, porque además de registrar tus progresos, 
            te da consejos para que siempre estés en la primera línea de juego.</p>
          <h4>No permitas que tu estilo te abandone</h4>
          <p>El Galaxy Watch Active tiene un diseño discreto y ligero con una pantalla que te permite ver rápidamente, y sin complicaciones todos tus progresos camino a la línea de llegada. 
            Además, tenés una gran variedad de correas a tu disposición para combinar con todos tus estilos</p>
        </div>
        <div className="col-md-6">
        <ReactPlayer
          url='https://www.youtube.com/watch?v=P4YuzFSIbJM&ab_channel=Samsung'
          className='react-player'
          playing
          width='600px'
          height='400px'
        />
        </div>
      </div>
    </div>




      
    
  )
}
