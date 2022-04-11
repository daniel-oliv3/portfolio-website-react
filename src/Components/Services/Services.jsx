import React from "react";
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";


const Services = () => {
    return (
        <div className="services">

            {/* Left side */}
            <div className="awesome">
            <span>Meu Incrível</span>
            <span>Serviços</span>
            <spane>
                Quem num gosta di mim que vai caçá sua turmis! Manduma pindureta quium dia nois paga.
                <br/>
                Suco de cevadiss deixa as pessoas mais interessantis.
            </spane>
            <button className="button s-button">Downloads CV</button>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                <div>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>
            </div>
        </div>
    )
}


export default Services;