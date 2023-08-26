import React from 'react';
import 'animate.css'; // Import animate.css styles
import sesameOilImage from '../../images/sesame-oil-image.jpg'; // Import your sesame oil image

const AboutUs = () => {
  return (
    <div className="about-us p-8 relative">
      <div className="flex items-center justify-center mb-8">
        <img
          src={sesameOilImage}
          alt="Sesame Oil Products"
          className="w-3/4 border-4 animate__animated animate__fadeIn"
        />
      </div>
      <div className="px-40 absolute top-52 left-48 text-gray-100 font-semibold w-3/4">
        <div className="flex items-center gap-2 mb-28 ml-96 pl-12">
          <h1 className="text-4xl font-semibold animate__animated animate__fadeIn">인사말</h1>
          <p className="font-semibold pt-4">About Us</p>
        </div>
        <p className="text-lg mb-4 animate__animated animate__fadeIn">
          Welcome to Sesame Oil Mall! We are passionate about providing you with the highest quality
          sesame oil products sourced from around the world. Our mission is to offer the finest
          selection of sesame oil to enhance your culinary experience.
        </p>
        <p className="text-lg mb-4 animate__animated animate__fadeIn">
          Our team consists of dedicated food enthusiasts who have a deep appreciation for the
          unique flavors and health benefits that sesame oil brings to dishes. We carefully curate
          our collection to each bottle of sesame oil meets our strict standards of quality.
        </p>
        <p className="text-lg mb-4 animate__animated animate__fadeIn">
          Whether you are a professional chef or a home cook, we invite you to explore our wide
          range of sesame oil varieties. From rich toasted sesame oil to delicate cold-pressed
          options, we have something for every palate and recipe.
        </p>
        <p className="text-lg mb-4 animate__animated animate__fadeIn">
          Thank you for choosing Sesame Oil Mall for your culinary needs. We look forward to serving
          you and helping you elevate your cooking to new heights!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
