
import AppleWatch from '../components/AppleWatch'
import ElCarousel from '../components/ElCarousel'
import NavBar from '../components/NavBar'
import SamsungW from '../components/SamsungW'
import SectionProducts from '../components/SectionProducts'
import SuuntoWatch from '../components/SuuntoWatch'
import GarminW from '../components/GarminW'
import { Container} from 'react-bootstrap'
import giflanding from '../Img/landing.gif'
import scroll from '../Img/scroll.gif'
import '../css/landing.css'





export default function Landing( {token, user, setToken} ) {
  
  return (
    <>
      <NavBar token={token} user={user} setToken={setToken}/>
        <div className=" container d-flex flex-column align-items-center">
          <div className="row d-flex align-items-center">
            <div className="col-md-9">
              <h5 className="my-5 mr-5 text-center titulos">En O'tech tenemos el reloj perfecto para vos</h5>
              <p className="mb-5 mr-5 fontP text-justify">Representamos la aventura. Abrir camino en la exploración ha sido parte de nuestro ADN, Hoy en día, O´tech está a la vanguardia del diseño y la innovación en relojes deportivos y de bienestar.
              </p>
              <p className="fontP mr-5 text-justify">Nos enorgullece ser los distribuidores oficiales de las cuatro marcas más grandes de relojes, los cuales pueden aguantarlo todo, pero también que están diseñados con una estética cotidiana</p>
            </div>

            <div className="col-md-3 text-center mt-5">
              <img src={giflanding} className="static imglanding" alt=""/>
              
              <img src={giflanding} className="active imglanding" alt=""/>
            </div>
          </div>

          <div className="">
              <a href="#carousel">
                <img src={scroll} className="imgscroll" alt=""/>
              </a>
          </div>
        </div>
      <ElCarousel />
      <SectionProducts />
      <Container className="mt-5">
        <h3 className="titulos">Nuestras marcas</h3>
      </Container>
      <AppleWatch />
      <SamsungW />
      <SuuntoWatch />
      <GarminW />
    </>
  )
}
