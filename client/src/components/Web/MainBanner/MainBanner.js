import React, {useState,useEffect} from "react";
import man from "../../../assets/img/png/hombre-web-sinfondo.png";
import woman from "../../../assets/img/png/mujer-web-sinfondo.png";

import "./MainBanner.scss";

function TextWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize",updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    return(
        width >= 2000  ? <h1 className = "main-title">SIN APARIENCIA SOMOS <span className = "entes">ENTES</span><span className = "guion-bajo">_</span></h1> : <h1 className = "main-title">SIN APARIENCIA <br/> SOMOS <span className = "entes">ENTES</span><span className = "guion-bajo">_</span></h1>
    )
}

export default function MainBanner() {
    return(
        <div className = "main-banner"> 
                <img src = {man} alt = "Hombre" className = "img-hombre"/>
                <TextWidth />
                <img src = {woman} alt = "Mujer" className ="img-mujer" />
        </div>
    )
}