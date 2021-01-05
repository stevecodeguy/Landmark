import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ScreenContext } from '../modal_context/ScreenContext';

import '../css/home.css';

import skyscraper from '../assets/images/home/render_landmark.jpg';
import landmark from '../assets/images/home/landmark-on-robson.svg';

export default function Home() {
    const { screenDistanceScrolled } = useContext(ScreenContext);
    const [adjustedScroll, setAdjustedScroll] = useState({
        life: 0,
        watch: 0
    });

    useEffect(() => {
        setAdjustedScroll(lastPosition => {
            const distance = screenDistanceScrolled;
            let newPostion = { 
                ...lastPosition,
                life: distance < 700 ? -(screenDistanceScrolled / 2) + 350 : 0,
                watch: distance > 100 ?  (screenDistanceScrolled / 5) -190 : 0
            };
            return newPostion;
        });
    }, [screenDistanceScrolled])

    return (
        <main className="home">
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
            <div className="content-1">
                <img src={skyscraper} alt="skyscraper" />
                {/* <Link to="/full-screen-video" style={{ transform: 'translateY(' + adjustedScroll.watch + 'px)' }}>
                    <h2>This is</h2>
                    <img src={landmark} alt="Landmark On Robson" />
                    <div className="watch">Watch The Film ►</div>
                </Link> */}
            </div>
        </main>
    );
}