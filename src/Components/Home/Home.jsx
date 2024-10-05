import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Homedata from './Homedata';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const mobiles = Homedata.map((items) => (
    <Card style={{ width: '18rem' }} key={items.id}>
      <Card.Img variant="top" src={items.ProductImage} />
      <Card.Body>
        <Card.Title><strong>{items.Title}</strong></Card.Title>
        <Card.Text>{items.Description}</Card.Text>
        <Link to={`/home/${items.id}/${items.Title}`}><Button>Shop Now</Button></Link>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      <h1 className={style.head}>Newly Launched Mobiles</h1>
      <div className={style.top}>{mobiles}</div>
    </>
  );
};

export default Home;
