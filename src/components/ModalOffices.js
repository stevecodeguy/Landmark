import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

import '../css/modal.css';

import offices from '../assets/images/modal/offices.jpg';
import officesLogo from '../assets/images/modal/offices-logo.png';

export default function ModalOffices() {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => { setOpenModal(false) }

  return (
    <ReactModal
      className="introducing"
      isOpen={openModal}
      style={{
        overlay: {
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
      <div className="modal-image">
        <img src={offices} alt="Landmark on Robson offices" />
      </div>
      <div className="modal-content">
        <div>
          <p className="intro">INTRODUCING</p>
          <img src={officesLogo} alt="Logo for Landmark on Robson offices" />
          <p className="message-1">A Rare Office Ownership Opportunity Coming to Downtown Vancouver’s Coveted Robson Street.</p>
          <p className="message-2">Register today to be the first to receive information on this exclusive offering.</p>
          <Link type="button" className="register" to="/offices/register">Register Now</Link>
        </div>
      </div>
    </ReactModal>
  );
}