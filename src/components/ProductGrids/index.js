import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import CardFlip from 'react-card-flip'; // Import react-card-flip
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import categoryImg from '../../images/main-category.jpg';
import { Link } from 'react-router-dom';

function ProductGrids() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped(!isFlipped);
    }, 2500);

    return () => {
      clearInterval(flipInterval);
    };
  }, [isFlipped]);

  return (
    <Container className="main-category">
      <p className="main-category-title">상품 카테고리</p>
      <Row>
        <Col>
          <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card
              className="w-[18rem] h-[28rem] px-4 m-auto cursor-pointer"
              onClick={handleCardClick}>
              <Card.Img variant="top" src={categoryImg} className="mt-11 animate-pulse" />
            </Card>

            <Card className="w-[18rem] h-[28rem] m-auto cursor-pointer" onClick={handleCardClick}>
              <Card.Body className="mt-32 flex flex-col gap-16">
                <div>
                  <Card.Title>
                    <b>참기름•들기름</b>
                  </Card.Title>
                  <Card.Text>Oils</Card.Text>
                </div>
                <Link to="/productOil">
                  <button className="bg-amber-500/90 py-2 px-3 rounded text-white mt-3">
                    <b>둘러보기</b>
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </CardFlip>
        </Col>
        <Col>
          <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card
              className="w-[18rem] h-[28rem] px-4 m-auto cursor-pointer"
              onClick={handleCardClick}>
              <Card.Img variant="top" src={categoryImg} className="mt-11 animate-pulse" />
            </Card>

            <Card className="w-[18rem] h-[28rem] m-auto cursor-pointer" onClick={handleCardClick}>
              <Card.Body className="mt-32 flex flex-col gap-16">
                <div>
                  <Card.Title>
                    <b>계절 특산품</b>
                  </Card.Title>
                  <Card.Text>Seasonal Products</Card.Text>
                </div>
                <Link to="/productOil">
                  <button className="bg-green-700/90 py-2 px-3 rounded text-white mt-3">
                    <b>둘러보기</b>
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </CardFlip>
        </Col>
        <Col>
          <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card
              className="w-[18rem] h-[28rem] px-4 m-auto cursor-pointer"
              onClick={handleCardClick}>
              <Card.Img variant="top" src={categoryImg} className="mt-11 animate-pulse" />
            </Card>
            <Card className="w-[18rem] h-[28rem] m-auto cursor-pointer" onClick={handleCardClick}>
              <Card.Body className="mt-32 flex flex-col gap-16">
                <div>
                  <Card.Title>
                    <b>기타 상품</b>
                  </Card.Title>
                  <Card.Text>Other Products</Card.Text>
                </div>
                <Link to="/productOil">
                  <button className="bg-lime-500/90 py-2 px-3 rounded text-white mt-3">
                    <b>둘러보기</b>
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </CardFlip>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductGrids;
