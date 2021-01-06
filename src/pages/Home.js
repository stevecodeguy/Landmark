import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SlickSlider from '../components/SlickSlider';
import Footer from '../components/Footer';
import ScrollDown from '../components/ScrollDown';

import { ScreenContext } from '../modal_context/ScreenContext';

import '../css/home.css';

import skyscraper from '../assets/images/home/render_landmark.jpg';
import residences from '../assets/images/home/render_residences.jpg';
import tour from '../assets/images/home/button_tour.png';
import robson from '../assets/images/home/one_robson.jpg';
import chair from '../assets/images/home/club_robson.jpg';
import landmark from '../assets/images/home/landmark-on-robson.svg';

export default function Home() {
    const { screenDistanceScrolled } = useContext(ScreenContext);
    const [adjustedScroll, setAdjustedScroll] = useState({
        life: 0,
        watch: 0,
        residences: 0,
        oneRobson: 0
    });

    useEffect(() => {
        setAdjustedScroll(lastPosition => {
            const distance = screenDistanceScrolled;
            let newPostion = {
                ...lastPosition,
                life: distance < 700 ? -(screenDistanceScrolled / 2) + 350 : 0,
                watch: distance > 100 ? (screenDistanceScrolled / 5) - 190 : 0,
                residences: distance > 700 ? (screenDistanceScrolled / 5) - 690 : 0,
                oneRobson: distance > 2000 ? (screenDistanceScrolled / 5) - 1590 : 0,
            };
            return newPostion;
        });
    }, [screenDistanceScrolled])

    return (
        <main className="home">
            <ScrollDown />
            <div className='banner'></div>
            <h1>
                <span>TRANSFORMING VANCOUVER'S</span>
                <br />
                <span>SKYLINE</span>
            </h1>
            <div className="life">
                <h3>A LANDMARK</h3>
                <div className="slideText">
                    <h6>L</h6>
                    <h6 style={{ transform: 'translateY(' + adjustedScroll.life + 'px)' }}>I</h6>
                    <h6 style={{ transform: 'translateY(' + adjustedScroll.life * 0.7 + 'px)' }}>F</h6>
                    <h6>E</h6>
                </div>
            </div>
            <div className="content-1">
                <img src={skyscraper} alt="skyscraper" />
                <Link to="/full-screen-video" style={{ transform: 'translateY(' + adjustedScroll.watch + 'px)' }}>
                    <h2>This is</h2>
                    <img src={landmark} alt="Landmark On Robson" />
                    <div className="watch">Watch The Film ►</div>
                </Link>
            </div>
            <div className="content-2">
                <Link to="/residences">
                    <img src={residences} alt="RefinedResidences" />
                </Link>
                <div>
                    <Link to="/full-screen-video">
                        <h2>Refined</h2>
                        <span>Residences</span>
                        <div className="discover">Discover the Residences</div>
                    </Link>
                    <Link to="/virtual-tours">
                        <img src={tour} alt="Display Suites" />
                        <span>Tour Display Suites ►</span>
                    </Link>
                </div>
            </div>
            <div className="content-3">
                <Link to="/robson">
                    <div>
                        <h2>
                            <span>There is only one</span>
                            <br />
                            <span>Robson</span>
                        </h2>
                        <div className="explore">Explore Robson</div>
                    </div>
                    <img src={robson} alt="RefinedResidences" />
                </Link>
            </div>
            <div className="content-4">
                <Link to="/amenities">
                    <img src={chair} alt="Lifestyle Concierge Services & Club Robson" />
                    <div>
                        <h2>
                            <span>Lifestyle Concierge Services &</span>
                            <br />
                            <span>Club Robson</span>
                        </h2>
                        <div className="discover">Discover the Amenities</div>
                    </div>
                </Link>
            </div>
            <div className="content-5">
                <Link to="/amenities">
                    <div>
                        <h2>
                            <span>Award-Winning</span>
                            <br />
                            <span>Team</span>
                        </h2>
                        <div className="meet">Meet the Team</div>
                    </div>
                </Link>
                <SlickSlider />
            </div>
            <Footer />
        </main>
    );
}