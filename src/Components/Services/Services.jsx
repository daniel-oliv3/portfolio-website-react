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
                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>
                {/* Segundo cart */}
                <div style={{top: "12rem", left: "-4rem"}}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React"}
                    />
                </div>
                {/* Terceiro cart*/}
                <div style={{top: "19rem", left: "12rem"}}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Mais vale um bebadis conhecidiss, que um alcoolatra anonimis malandris se pirulitá."}
                    />
                </div>
            </div>
        </div>
    )
}


export default Services;