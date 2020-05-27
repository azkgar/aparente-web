import React from 'react';
import LogoAparente from "../../../../assets/img/png/APARENTE_logo_extendido_sinfondo.png";
import SocialLinks from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
    return (
        <div className = "my-info">
            <img src = {LogoAparente} alt = "Aparente"/>
            <h5>Sin apariencia somos entes_ ®</h5>
            <SocialLinks />
        </div>
    )
}
