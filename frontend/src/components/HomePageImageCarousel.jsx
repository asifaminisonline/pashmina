import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePageImageCarousel.css';

const HomePageImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://www.angadcreations.com/wp-content/uploads/2022/06/IMG_7989_result-600x800.webp" alt="Slide 1" />
        <div className="carousel-text">
          <h2>Slide 1 Title</h2>
          <p>Some description text on the image.</p>
          <button>Click Me</button>
        </div>
      </div>
      <div>
        <img src="https://www.angadcreations.com/wp-content/uploads/2022/06/IMG_7996_result.webp" alt="Slide 1" />
        <div className="carousel-text">
          <h2>Slide 1 Title</h2>
          <p>Some description text on the image.</p>
          <button>Click Me</button>
        </div>
      </div>
      <div>
        <img src="https://www.angadcreations.com/wp-content/uploads/2022/06/IMG_7867_result.webp" alt="Slide 1" />
        <div className="carousel-text">
          <h2>Slide 1 Title</h2>
          <p>Some description text on the image.</p>
          <button>Click Me</button>
        </div>
      </div>
    </Slider>
  );
};

export default HomePageImageCarousel;
