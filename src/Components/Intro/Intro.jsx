import React from 'react';
import './Intro.css';

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

            </div>
            <div className="i-right">
                eu sou lado direito
            </div>
        </div>
    );
}

export default Intro;