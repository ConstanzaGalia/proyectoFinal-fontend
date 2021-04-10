import { Card, Button } from "react-bootstrap";


export default function CardProducts( {product} ) {
  return (
    <div>
      <Card className="m-3" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="secondary mr-2">Comprar</Button>
          <Button variant="outline-secondary" disabled> ${product.price} </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
