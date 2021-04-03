
import AppleWatch from '../components/AppleWatch'
import ElCarousel from '../components/ElCarousel'
import NavBar from '../components/NavBar'
import SamsungW from '../components/SamsungW'
import SectionProducts from '../components/SectionProducts'
import SuuntoWatch from '../components/SuuntoWatch'
import GarminW from '../components/GarminW'



export default function Landing( {token, user, setToken} ) {
  return (
    <>
      <NavBar token={token} user={user} setToken={setToken}/>
      <ElCarousel />
      <SectionProducts />
      <AppleWatch />
      <SamsungW />
      <SuuntoWatch />
      <GarminW />
    </>
  )
}
