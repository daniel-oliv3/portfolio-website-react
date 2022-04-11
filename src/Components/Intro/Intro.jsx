import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';

import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
            <div className="i-name">
                <span>Oi! Eu sou</span>
                <span>Daniel Oliveira</span>
                <span>Desenvolvedor frontend com alta experiência em web design e desenvolvimento, produzindo o trabalho de qualidade</span>
            </div>
            <button className="button i-button">Contrate-me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>

            </div>
            <div className="i-right">
                
                
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <img src={Glassesimoji} alt="" />
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={Thumbup} txt1='Prêmio de' txt2='Melhor Design'/>
                </div>
                {/* Borrão blur divs*/}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    );
}

export default Intro;