import { Link } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductsNav from "../ProductsNav/ProductsNav";
import TVAppliancesData from './TV&AppliancesData';
import Electronic from "./Electronic.module.css"
const TVAppliances = () => {
  const Data = TVAppliancesData.map((items) => (
    <Card style={{ width: '18rem', }} key={items.id}>
      <Card.Img variant="top" style={{ objectFit: 'cover', height: "200px", border: "1px solid black", borderRadius: "2px" }} className={Electronic.transitions} src={items.ProductImage} />
      <Card.Body>
        <Card.Title><h5 style={{ fontfamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>{items.Title}</h5></Card.Title>
        <p className={Electronic.rating}>{items.Rating} ★ </p>
        <Card.Text><strong>{items.Offer}</strong> <span style={{ marginRight: '8px' }}></span> <del style={{ opacity: 0.8 }}>{items.Price}</del><span style={{ marginRight: '8px' }}></span> <strong style={{ color: "green" }}>{items.Discount}</strong></Card.Text>
        <Link to={`/TVAppliances/${items.id}/${items.Title}`}><Button variant="primary">Shop Now</Button></Link>
      </Card.Body>
    </Card>
  ))
  return (<>
    <ProductsNav />
    <div className={Electronic.data}>
      {Data}
    </div>
  </>)
}
export default TVAppliances;