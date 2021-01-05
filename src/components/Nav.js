import React from 'react';
import { Link } from 'react-router-dom';

import "../css/nav.css";

import LandmarkOnRobson from "../assets/images/landmark.svg";

export default function Nav() {
    return (
        <nav>
            <Link to="/">
                <img src={LandmarkOnRobson} alt="Landmark On Robson" />
            </Link>
            <div className="nav-right">
                <div className="nav-right__links">
                    <Link to="/" >EN</Link>
                    <Link className='inactive' to="/zh-hant/" >繁體</Link>
                    <Link className='inactive' to="/zh-hans/" >简体</Link>
                    <Link className='show-for-medium' to="/register" >Register</Link>
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
