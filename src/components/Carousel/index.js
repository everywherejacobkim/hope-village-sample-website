import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import product1 from '../../images/참기름320.png';
import product2 from '../../images/들기름320.png';
import product3 from '../../images/참기름1800.png';
import product4 from '../../images/흑깨300.png';
import product5 from '../../images/참기름1800.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const bestProducts = [
  {
    image: product1,
    title: '참기름',
    eng: 'Sesame Oil',
    amount: '320ml'
  },
  {
    image: product2,
    title: '들기름',
    eng: 'Wild Sesame Oil',
    amount: '320ml'
  },
  {
    image: product3,
    title: '건강한 들기름',
    eng: 'Jumbo Wild Sesame Oil',
    amount: '1800ml'
  },
  {
    image: product4,
    title: '건강한 참기름',
    eng: 'Jumbo Sesame Oil',
    amount: '1800ml'
  },
  {
    image: product5,
    title: '들기름 320ml'
  }
];

const MainCarousel = () => {
  return (
    <div className="carousel-container">
      <p>베스트 상품</p>
      <Carousel responsive={responsive}>
        {bestProducts.map((product, index) => (
          <div key={index} className="bg-lime-200/50 pt-3 pb-3 mx-2 rounded-xl">
            <img src={product.image} alt="product-image" />
            <h1 className="font-semibold -mt-2">{product.title}</h1>
            <h1 className="text-xs mt-1 font-semibold">{product.eng}</h1>
            <h1 className="mt-2 text-sm bg-red-400 mx-24 p-1 rounded-full text-white font-bold">
              {product.amount}
            </h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
