import React from 'react';

import '../css/scrolldown.css';

import downArrow from '../assets/images/arrow.png'

export default function ScrollDown() {
  const scrollDown = () => {
    window.scrollTo(0, 1000);
  }

  return (
    <div onClick={() => scrollDown()} className="scrollDown">
      <hr />
      <p>Scroll Down</p>
      <img src={downArrow} alt="Down Arrow" />
    </div>
  );
}