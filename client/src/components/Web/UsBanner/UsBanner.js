import React from 'react';
import Walking from "../../../assets/img/png/APARENTE-caminando.png";
import Shadows from "../../../assets/img/png/APARENTE-entes.png";

import "./UsBanner.scss";

export default function UsBanner() {
    return (
        <div className = "us-description-banner">
            <div className = "us-description-banner__dark">
                <h2 className = "shadows-title">Mundo oscuro</h2>
                <img alt = "siluetas de personas conocidas en aparente como entes" src = {Shadows} className = "shadows"/>
            </div>
            <img alt = "ente caminando" src = {Walking} className = "walking"/>
            <h2 className = "walking-title" >Mundo luz</h2>
        </div>
    )
}
