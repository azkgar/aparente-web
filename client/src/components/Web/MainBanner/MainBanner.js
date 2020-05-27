import React from "react";
import {Row, Col} from "antd";
import man from "../../../assets/img/png/hombre-web-sinfondo.png";
import woman from "../../../assets/img/png/mujer-web-sinfondo.png";

import "./MainBanner.scss";

export default function MainBanner() {
    return(
        <div className = "main-banner"> 
                <img src = {man} alt = "Hombre" className = "img-hombre"/>
                <h1 className = "main-title">SIN APARIENCIA <br/> SOMOS <span className = "entes">ENTES</span><span className = "guion-bajo">_</span></h1>
                <img src = {woman} alt = "Mujer" className ="img-mujer" />
        </div>
    )
}