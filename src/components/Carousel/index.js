import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const MainCarousel = () => {
  return (
    <div className="carousel-container">
      <p>베스트 상품</p>
      <Carousel responsive={responsive}>
        <img src="data/productOil/image/참기름1800.jpg" />
        <img src="data/productOil/image/들기름320.jpg" />
        <img src="data/productSeasonal/image/흑깨300.jpg" />
        <img src="data/productEtc/image/볶음소금.jpg" />
        <img src="data/productOil/image/참기름1800.jpg" />
        <img src="data/productOil/image/들기름320.jpg" />
        <img src="data/productSeasonal/image/흑깨300.jpg" />
        <img src="data/productEtc/image/볶음소금.jpg" />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
