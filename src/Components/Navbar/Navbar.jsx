import React from 'react';

const Navbar = () => {
    return (
        <div className="n-wrapper">

            <div className="n-left">
                <div className="n-name">Daniel</div>
                <span>Alternancia</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Experiência</li>
                        <li>Portfólio</li>
                        <li>Testemunho</li>
                    </ul>
                </div>
                <button className="button">
                    Contate-Nos
                </button>
            </div>

        </div> 
    )
}


export default Navbar;

