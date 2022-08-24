import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dogFood from '../../images/dog-food.jpg';
import dogTreat from '../../images/dog-treat.jpg';
import dogSupplies from '../../images/dog-supplies.jpg';
import { Link } from 'react-router-dom';

function ProductGrids() {
  return (
    <Container className="main-category">
      <Row>
        <Col>
          <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={dogFood} />
            <Card.Body>
              <Card.Title>Dog Food</Card.Title>
              <Card.Text>Food</Card.Text>
              <Link to="/dogFood">
                <Button variant="success">Go Shop</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={dogTreat} />
            <Card.Body>
              <Card.Title>Dog Treat</Card.Title>
              <Card.Text>Treat</Card.Text>
              <Link to="/dogTreat">
                <Button variant="success">Go Shop</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={dogSupplies} />
            <Card.Body>
              <Card.Title>Dog Supplies</Card.Title>
              <Card.Text>Supplies</Card.Text>
              <Link to="/dogSupplies">
                <Button variant="success">Go Shop</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductGrids;
