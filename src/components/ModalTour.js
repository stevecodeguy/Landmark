import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../css/modalTour.css';

import tour from '../assets/images/modal/tour.jpg';
import { ModalContext } from '../context/ModalContext';

export default function ModalTour() {
  const { setShowTourModal } = useContext(ModalContext);

  return (
    <div className="tourModal">
      <button className="modal-close"
        onClick={() => { setShowTourModal(false) }}
      >
        <hr />
        <hr />
      </button>
      <img src={tour} alt="Tour Display Suites Overview" />
      <p>TOUR DISPLAY SUITES</p>
      <Link to="/virtual-tours" className="circle">
        <span>►</span>
      </Link>
    </div>
  );
}