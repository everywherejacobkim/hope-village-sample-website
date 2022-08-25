import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import dogAds1 from '../../images/dog-5.jpg';
import dogAds2 from '../../images/dog-6.jpg';
import dogAds3 from '../../images/dog-7.jpg';

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
        <img src={dogAds1} />
        <img src={dogAds2} />
        <img src={dogAds3} />
        <img src={dogAds1} />
        <img src={dogAds2} />
        <img src={dogAds3} />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
