import React, { useContext, useState, useEffect } from 'react';

import { ScreenContext } from '../modal_context/ScreenContext';

import '../css/home.css';

import skyscraper from '../assets/images/home/render_landmark.jpg';
import landmark from '../assets/images/home/landmark-on-robson.svg';

export default function Home() {
    const { screenDistanceScrolled } = useContext(ScreenContext);
    const [adjustedScroll, setAdjustedScroll] = useState(0);

    const drawLine = () => {
        let canvas = document.getElementById('drawLine');
        let ctx = canvas.getContext("2d");

        ctx.begin();
        ctx.moveTo(0,0);
        ctx.lineTo(300, 150);
        ctx.stroke();
    }

    useEffect(() => {
        setAdjustedScroll(() => {
            let distance = screenDistanceScrolled < 700 ? -(screenDistanceScrolled / 2) + 350 : 0;
            return distance;
        });
    }, [screenDistanceScrolled])

    useEffect(() => {
        const watch = document.querySelector('.watch');
        watch.addEventListener('mouseover', () => drawLine());

        return () => watch.removeEventListener('mouseover', drawLine());
    }, []);

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
                    <h6 style={{ transform: 'translateY(' + adjustedScroll + 'px)' }}>I</h6>
                    <h6 style={{ transform: 'translateY(' + adjustedScroll * 0.7 + 'px)' }}>F</h6>
                    <h6>E</h6>
                </div>
            </div>
            <div className="content-1">
                <img src={skyscraper} alt="skyscraper" />
                <div>
                    <h2>This is</h2>
                    <img src={landmark} alt="Landmark On Robson" />
                    <div className="watchLine">
                        <canvas id="drawLine" width="300" height="100"></canvas>
                        <h2 className="watch">Watch The Film ►</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}