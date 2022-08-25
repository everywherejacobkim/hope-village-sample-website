import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const DogFood = () => {
  const [loading, setLoading] = useState(false);
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('data/dogFood/dogFoodData.json')
      .then((res) => {
        console.log(res.data);
        setDogData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2>Dog Food</h2>
      <div className="product-container">
        {loading && (
          <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {dogData.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <img src={product.image} alt="#" />
            </div>
            <div>
              <h6>{product.title}</h6>
              <h6>{`Price: $ ${product.price}`}</h6>
              <h6>{product.content}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DogFood;
