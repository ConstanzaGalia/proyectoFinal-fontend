import CardProducts from './CardProducts'
import GrupoBotones from './GrupoBotones'

export default function SectionProducts() {
  return (
    <div className="container my-5">
        <GrupoBotones />
      <div className="row">
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
      </div>
    
    </div>
  )
}
