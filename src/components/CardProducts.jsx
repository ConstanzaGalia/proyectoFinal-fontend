import { Card, Button } from "react-bootstrap";


export default function CardProducts() {
  return (
    <div>
      <Card className="m-3" style={{ width: "15rem" }}>
        <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_898562-MLA44071773299_112020-O.jpg" />
        <Card.Body>
          <Card.Title>Suunto 9 Baro</Card.Title>
          <Card.Text>
            Descripción
          </Card.Text>
          <Button variant="secondary">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
