import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

const DogTreat = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('data/productSeasonal/productSeasonalData.json')
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="my-10">
        <h1 className="text-3xl font-bold">계절 특산품</h1>
        <h1 className="text-sm font-bold bg-primary-action text-white mt-1 py-0.5">
          Seasonal Products
        </h1>
      </div>
      <div className="product-container">
        {loading && (
          <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {productData.map((product) => (
          <Card style={{ width: '18rem' }} key={product.id} className="dogFood-card">
            <Card.Img
              variant="top"
              src={product.image}
              alt="#"
              className="w-64 h-64 mx-auto mt-2"
            />
            <Card.Body>
              <Card.Title className="font-semibold mb-3">{product.title}</Card.Title>
              <Card.Text className="text-sm mb-3 mx-4">{product.content}</Card.Text>
              <Card.Text className="mb-2 font-sans">{`${product.price}`}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DogTreat;
