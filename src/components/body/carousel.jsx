import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mint from '../../assets/mint.jpg'
import monstera from '../../assets/monstera.jpg'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={monstera} alt="Image 1" />
      </div>
      <div>
        <img src={mint} alt="Image 2" />
      </div>
      <div>
        <img src={monstera} alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Carousel;