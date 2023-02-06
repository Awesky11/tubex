import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = (props) => {
  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const { banners } = props;

  return (
    <div>
      <Slider {...settings}>
        {banners.map((item, i) => (
          <div className="banner-container" key={i}>
            <img className="banner-image" src={item.thumb} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
