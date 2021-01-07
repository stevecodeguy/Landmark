import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/slider.css';

import slider1 from '../assets/images/home/slider_1.jpg';
import slider2 from '../assets/images/home/slider_2.jpg';
import slider3 from '../assets/images/home/slider_3.jpg';
import slider4 from '../assets/images/home/slider_4.jpg';

export default class SlickSlider extends Component {
  render() {
    const width = window.innerWidth;
    const settings = {
      infinite: true,
      speed: 500,
      draggable: true,
      slidesToScroll: 1,
      variableWidth: true,
      dots: width < 1025 ? true : false,
      autoplay: width < 1025 ? true : false,
    };

    return (
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="City skyline" />
        </div>
        <div>
          <img src={slider2} alt="Palm trees" />
        </div>
        <div>
          <img src={slider3} alt="Dockside" />
        </div>
        <div>
          <img src={slider4} alt="Dinning Hall" />
        </div>
      </Slider>
    );
  }
}