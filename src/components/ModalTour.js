import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

import '../css/modalTour.css';

import tour from '../assets/images/modal/tour.jpg';

export default function ModalTour() {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => { setOpenModal(false) }

  return (
    <ReactModal
      className="tourModal"
      isOpen={openModal}
      style={{
        overlay: {
          width: 0,
          height: 0,
          zIndex: -999,

          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        },
        content: {
          //styled in css file 
        }
      }}
    >
      <button className="modal-close"
        onClick={(event) => closeModal(event)}
      >
        <hr />
        <hr />
      </button>
      <div className="modal-content">
        <div>
          <img src={tour} alt="Logo for Landmark on Robson offices" />
          <span className="message-1">Tour Display Suites</span>
          <Link type="button" className="register" to="/offices/register">Register Now</Link>
        </div>
      </div>
    </ReactModal>
  );
}