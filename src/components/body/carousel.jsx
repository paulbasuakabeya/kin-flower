import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mint from '../../assets/mint.jpg'
import monstera from '../../assets/monstera.jpg'
import Lago from '../../assets/Lago.avif'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <img src={monstera} alt="Image" />
      </div>
      <div>
        <img src={monstera} alt="Image" />
      </div>
      <div>
        <img src={mint} alt="Image 2" />
      </div>
      <div>
        <img src={mint} alt="Image 2" />
      </div>
      <div>
        <img src={Lago} alt="Image 2" />
      </div>
      <div>
        <img src={Lago} alt="Image 2" />
      </div>
    </Slider>
  );
};

export default Carousel;