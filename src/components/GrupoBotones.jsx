import { Button, ButtonGroup } from "react-bootstrap";

export default function GrupoBotones() {
  return (
    <div className="my-5 text-center">
      <ButtonGroup size="lg">
        <Button>Buscar por tipo</Button>
        <Button>Buscar por marca</Button>
        <Button>Buscar por uso</Button>
    </ButtonGroup>
    </div>
  )
}
