
import AppleWatch from '../components/AppleWatch'
import ElCarousel from '../components/ElCarousel'
import NavBar from '../components/NavBar'
import SamsungW from '../components/SamsungW'
import SectionProducts from '../components/SectionProducts'
import SuuntoWatch from '../components/SuuntoWatch'
import GarminW from '../components/GarminW'
import { Container } from 'react-bootstrap'





export default function Landing( {token, user, setToken} ) {
  
  return (
    <>
      <NavBar token={token} user={user} setToken={setToken}/>
      <Container className="my-5">
        <h5 className="my-5 titulos">En O´tech tenemos el reloj perfecto para ti</h5>
        <p className="mb-5 fontP">Representamos la aventura. Abrir camino en la exploración ha sido parte de nuestro ADN, Hoy en día, O´tech está a la vanguardia del diseño y la innovación en relojes deportivos y de bienestar.
        </p>
        <p className="mb-5 fontP">Nos enorgullece ser los distribuidores oficiales de las cuatro marcas más grandes de relojes, los cuales pueden aguantarlo todo, pero también que están diseñados con una estética cotidiana</p>
      </Container>
      <ElCarousel />
      <SectionProducts />
      <Container className="my-5">
        <h3 className="titulos">Nuestras marcas</h3>
      </Container>
      <AppleWatch />
      <SamsungW />
      <SuuntoWatch />
      <GarminW />
    </>
  )
}
