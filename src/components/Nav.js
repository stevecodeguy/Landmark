import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "../css/nav.css";

import { ScreenContext } from '../context/ScreenContext';

import LandmarkOnRobson from "../assets/images/landmark.svg";
import asia from "../assets/images/asia_standard.png";
import magnum from "../assets/images/magnum.png";

import bannerHome from '../assets/images/home/banner.jpg';
import bannerViews from '../assets/images/270/banner.jpg';
import bannerRobson from '../assets/images/one_robson/banner.jpg';
import bannerResidences from '../assets/images/residences/banner.jpg';
import bannerTours from '../assets/images/tours/banner.jpg';
import bannerAmenities from '../assets/images/amenities/banner.jpg';
import bannerMedia from '../assets/images/media/banner.jpg';
import bannerRegister from '../assets/images/register/banner.jpg';
import bannerContact from '../assets/images/contact/banner.jpg';

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
        banner.style.removeProperty('background-image');
        menuList.classList.toggle('toFront');
        menuFooter.classList.toggle('unHide');
    };

    const addBanner = (src) => {
        const banner = document.querySelector('.banner');
        banner.style.backgroundImage = `url('${src}')`;
    };

    useEffect(() => {
        const banner = document.querySelector('.banner');
        const menuHome = document.querySelector('.menuHome');
        const menuRobson = document.querySelector('.menuRobson');
        const menuViews = document.querySelector('.menuViews');
        const menuResidences = document.querySelector('.menuResidences');
        const menuTours = document.querySelector('.menuTours');
        const menuAmenities = document.querySelector('.menuAmenities');
        const menuTeam = document.querySelector('.menuTeam');
        const menuMedia = document.querySelector('.menuMedia');
        const menuRegister = document.querySelector('.menuRegister');
        const menuContact = document.querySelector('.menuContact');

        banner.addEventListener('mouseout', () => banner.style.removeProperty('backgroundImage'));

        const classArray = [
            [menuHome, bannerHome],
            [menuRobson, bannerRobson],
            [menuViews, bannerViews],
            [menuResidences, bannerResidences],
            [menuTours, bannerTours],
            [menuAmenities, bannerAmenities],
            [menuTeam, bannerHome],
            [menuMedia, bannerMedia],
            [menuRegister, bannerRegister],
            [menuContact, bannerContact]
        ];

        classArray.forEach(menuItem => {
            menuItem[0].addEventListener('mouseover', () => addBanner(menuItem[1]));
        });

        return () => {
            classArray.forEach((menuItem, i) => {
                menuItem[0].removeEventListener('mouseover', () => addBanner(menuItem[1]));
            });
        }
    }, []);

    useEffect(() => {
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
                <li><Link className="menuHome" to="/" onClick={() => openNav()}>Home</Link></li>
                <li><Link className="menuRobson" to="/robson" onClick={() => openNav()}>Only One Robson</Link></li>
                <li><Link className="menuViews" to="/views" onClick={() => openNav()}>270° Views</Link></li>
                <li><Link className="menuResidences" to="/residences" onClick={() => openNav()}>Refined Residences</Link></li>
                <li><Link className="menuTours" to="/virtual-tours" onClick={() => openNav()}>Display Suites Tours</Link></li>
                <li><Link className="menuAmenities" to="/amenities" onClick={() => openNav()}>Club Robson, Lifestyle<br />Concierge Services</Link></li>
                <li><Link className="menuTeam" to="/team" onClick={() => openNav()}>Award-Winning Team</Link></li>
                <li><Link className="menuMedia" to="/media" onClick={() => openNav()}>Media</Link></li>
                <li><Link className="menuRegister" to="/register" onClick={() => openNav()}>Register</Link></li>
                <li><Link className="menuContact" to="/contact" onClick={() => openNav()}>Contact</Link></li>
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
