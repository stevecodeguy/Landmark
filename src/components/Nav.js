import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "../css/nav.css";

import { ScreenContext } from '../context/ScreenContext';

import LandmarkOnRobson from "../assets/images/landmark.svg";
import asia from "../assets/images/asia_standard.png";
import magnum from "../assets/images/magnum.png";

export default function Nav() {
    const { screenDistanceScrolled } = useContext(ScreenContext);
    const [, setOldYPosition] = useState(0);

    const openNav = () => {
        const navButton = document.querySelector('.navButton');
        const banner = document.querySelector('.banner');
        const menuList = document.querySelector('.menuList');
        const menuFooter = document.querySelector('.menuFooter');

        navButton.classList.toggle('openNav');
        banner.classList.toggle('toFront');
        menuList.classList.toggle('toFront');
        menuFooter.classList.toggle('unHide');
    }

    useEffect(() => {
        console.log(screenDistanceScrolled)
        function setPosition() {
            setOldYPosition(prevPosition => {
                if (screenDistanceScrolled < 800) return 0;

                const nav = document.getElementsByTagName('nav')[0];
                if (screenDistanceScrolled < prevPosition) {
                    nav.classList.remove('hide');
                } else {
                    nav.classList.add('hide');
                }
                return screenDistanceScrolled;
            });
        }

        setTimeout(setPosition, 200);
    }, [screenDistanceScrolled, setOldYPosition]);

    return (
        <div className="nav">
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
                    <button className="navButton" onClick={() => openNav()}>
                        <div>
                            <hr className="navLine1" />
                            <hr className="navLine2" />
                            <hr className="navLine3" />
                        </div>
                    </button>
                </div>
            </nav>
            <ul className="menuList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/robson">Only One Robson</Link></li>
                <li><Link to="/views">270° Views</Link></li>
                <li><Link to="/residences">Refined Residences</Link></li>
                <li><Link to="/virtual-tours">Display Suites Tours</Link></li>
                <li><Link to="/amenities">Club Robson, Lifestyle<br />Concierge Services</Link></li>
                <li><Link to="/team">Award-Winning Team</Link></li>
                <li><Link to="/media">Media</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="menuFooter">
                <div className="contact">
                    <a href="https://www.google.ca/maps/place/1400+Robson+St,+Vancouver,+BC+V6G+1B9/@49.2880923,-123.1329422,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718773f2f537:0xc8ade08187e406ce!8m2!3d49.2880923!4d-123.1307536" rel="noreferrer" target="_blank">
                        <p>1400 Robson St. Vancouver, BC</p>
                    </a>
                    <div>
                        <p>604 566 2288 &#160;|</p>
                        <a href="mailto:info@landmarkonrobson.com" rel="noreferrer" target="_blank">
                            <p>&#160;INFO@LANDMARKONROBSON.COM</p>
                        </a>
                    </div>
                </div>
                <div className="logos">
                    <a href="http://www.asiastandardamericas.com/" rel="noreferrer" target="_blank">
                        <img className="asia" src={asia} alt="Asia Standard Americas" />
                    </a>
                    <a href="http://magnumprojects.ca/" rel="noreferrer" target="_blank">
                        <img className="magnum" src={magnum} alt="Magnum Projects Ltd" />
                    </a>
                </div>
            </div>
        </div>
    );
}
