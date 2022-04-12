import React from "react";
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";


const Works = () => {
    return (
        <div className="works">
            {/* Left side */}
            <div className="awesome">
            <span>Funciona Para Todos Esses</span>
            <span>Marcas & Clientes</span>
            <spane>
                Quem num gosta di mim que vai caçá sua turmis! Manduma pindureta quium dia nois paga.
                <br/>
                Suco de cevadiss deixa as pessoas mais interessantis.
                <br/>
                Quem num gosta di mé, boa gentis num é. Suco de cevadiss, é um leite divinis,
                <br/>
                Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo.
            </spane>

                <button className="button s-button">Contato</button>

            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>

            {/* Right side */}
            <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* Background Circles*/}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
            </div>            
        </div>
    );
};


export default Works;