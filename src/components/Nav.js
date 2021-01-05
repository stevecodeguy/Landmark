import React from 'react';
// import { Link } from 'react-router-dom';

import "../css/nav.css";

import LandmarkOnRobson from "../assets/images/landmark.svg";

export default function Nav() {
    return (
        <nav>
            <a href="/">
                <img src={LandmarkOnRobson} alt="Landmark On Robson" />
            </a>
            <div className="nav-right">
                <div className="nav-right__links">
                    <a href="/" type="button">EN</a>
                    <a className='inactive' href="/zh-hant/" type="button">繁體</a>
                    <a className='inactive' href="/zh-hans/" type="button">简体</a>
                    <a className="show-for-medium" href="/register">Register</a>
                </div>
                <button>
                    <hr />
                    <hr />
                    <hr />
                </button>
            </div>
        </nav>
    );
}
