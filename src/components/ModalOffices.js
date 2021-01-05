import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../css/modalOffices.css';

import offices from '../assets/images/modal/offices.jpg';
import officesLogo from '../assets/images/modal/offices-logo.png';
import { ModalContext } from '../modal_context/ModalContext';

export default function ModalOffices() {
  const { setShowIntroModal } = useContext(ModalContext);

  return (
    <div className="overlay">
      <div className="introducing">
        <button className="modal-close"
          onClick={() => { setShowIntroModal(false) }}
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
      </div>
    </div>
  );
}