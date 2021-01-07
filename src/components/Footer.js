import React from 'react';

import '../css/footer.css';

import asia from '../assets/images/asia_standard.png';
import magnum from '../assets/images/magnum.png';

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <footer>
        <p>The Developer reserves the right in its sole discretion to make modifications or changes to the building design, floor plans, project designs, layouts, specifications, materials, finishes, features and dimensions without prior notice. All imagery including renderings and photographs are representational only and may not be accurate. Dimensions, sizes and square footages are approximate. Actual final dimensions, sizes, and square footages following completion of construction may vary from those set out herein. E. & O. E.</p>
        <a href="https://www.google.ca/maps/place/1400+Robson+St,+Vancouver,+BC+V6G+1B9/@49.2880923,-123.1329422,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718773f2f537:0xc8ade08187e406ce!8m2!3d49.2880923!4d-123.1307536"  rel="noreferrer" target="_blank">
          <p>1400 Robson St. Vancouver, BC</p>
        </a>
        <div>
          <p>604 566 2288</p>
          <p>&#160;|</p>
          <a href="mailto:info@landmarkonrobson.com" rel="noreferrer" target="_blank">
            <p>&#160;INFO@LANDMARKONROBSON.COM</p>
          </a>
        </div>
        <div className="lowerLinks">
          <a href="http://www.bamdigital.com/" rel="noreferrer" target="_blank">
            <p>SITE BY BAM DIGITAL</p>
          </a>
          <div className="logos">
            <a href="http://www.asiastandardamericas.com/" rel="noreferrer" target="_blank">
              <img className="asia" src={asia} alt="Asia Standard Americas" />
            </a>
            <a href="http://magnumprojects.ca/" rel="noreferrer" target="_blank">
              <img className="magnum" src={magnum} alt="Magnum Projects Ltd" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}