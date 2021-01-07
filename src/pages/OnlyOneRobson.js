import React from 'react';

import Footer from '../components/Footer';

import '../css/onlyOneRobson.css';

export default function OnlyOneRobson(){
    return (
        <main className="robson home">
            <div className='banner'>
                <div></div>
            </div>
            <h1>
                <span>THERE IS ONLY ONE</span>
                <br />
                <span>ROBSON</span>
            </h1>
            <Footer />
        </main >
    );
}