import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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
      <p>Featured Products</p>
      <Carousel responsive={responsive}>
        <img src="data/dogFood/image/dogFood-1.jpeg" />
        <img src="data/dogFood/image/dogFood-2.jpeg" />
        <img src="data/dogFood/image/dogFood-3.jpeg" />
        <img src="data/dogFood/image/dogFood-4.jpeg" />
        <img src="data/dogFood/image/dogFood-5.jpeg" />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
