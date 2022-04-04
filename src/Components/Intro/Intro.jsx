import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

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
                eu sou lado direito
            </div>
        </div>
    );
}

export default Intro;