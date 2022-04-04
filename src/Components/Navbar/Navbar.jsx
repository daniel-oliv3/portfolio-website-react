import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="n-wrapper">

            <div className="n-left">
                <div className="n-name">Daniel</div>
                <span>Alternancia</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Experiência</li>
                        <li>Portfólio</li>
                        <li>Testemunho</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contate-Nos
                </button>
            </div>

        </div> 
    )
}


export default Navbar;

