import React from 'react';
import Computer from "../../../../assets/img/png/APARENTE-computadora.png";
import Maniqui from "../../../../assets/img/png/APARENTE-maniqui.png";

import "./MainBanner.scss";

export default function MainBanner() {
    return (
        <div className = "us-banner">
                
            <img alt = "Computadora retro Aparente" src = {Computer} className = "computer" />
            <h1>Aparente<span>_</span></h1>
            <img alt = "Maniquí con estilo Aparente" src = {Maniqui} className = "maniqui" />
            
        </div>
    );
}
