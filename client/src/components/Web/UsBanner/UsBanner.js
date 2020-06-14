import React from 'react';
import Walking from "../../../assets/img/png/APARENTE-caminando.png";
import Shadows from "../../../assets/img/png/APARENTE-entes.png";
import {Button} from "antd";

import "./UsBanner.scss";

export default function UsBanner() {
    return (
        <div className = "us-description-banner">
            <div className = "us-description-banner__dark">
                <h2 className = "shadows-title">¡ Deja de ser "uno más" !</h2>
                <img alt = "siluetas de personas conocidas en aparente como entes" src = {Shadows} className = "shadows"/>
            </div>
            <img alt = "ente caminando" src = {Walking} className = "walking"/>
            <h2 className = "walking-title" >Muéstrale al mundo quién eres<span>_</span></h2>
            <p className = "walking-description">Desarrollamos estrategias para que personas y marcas usen su <span><strong>imagen</strong></span> como una herramienta que los impulse <strong>hacia sus metas</strong>.</p>
            <Button size = "large" href = "/nosotros" className = "walking-button">Conoce Aparente_</Button>
        </div>
    )
}
