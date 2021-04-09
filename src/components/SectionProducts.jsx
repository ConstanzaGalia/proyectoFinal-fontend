import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducts from '../components/CardProducts';
import { Container, Row } from 'react-bootstrap';
import GrupoBotones from './GrupoBotones'

export default function Products( {token, user, setToken} ) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      const getProducts = async () => {
          const { data } = await axios.get('http://localhost:4000/api/products');
          setProducts(data);
          console.log("🚀 ~ file: Productos.jsx ~ line 15 ~ getProducts ~ data", products)
      };
      getProducts();
  }, []);

  
  return (
    <div className="container my-5">
        <GrupoBotones />
        <Container className="my-5">
            <Row className="flex-row justify-content-center">
                {products.map((p) => (
                    <CardProducts product={p} key={p._id} />
                ))}
            </Row>
        </Container>
    
    </div>
  )
}
