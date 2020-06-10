import React from 'react';
import MainBanner from "../components/Web/Contact/MainBanner";
import WhatsApp from "../components/Web/Contact/WhatsApp";
import {Helmet} from "react-helmet";

export default function Contact() {
    return (
        <>
        <Helmet>
            <title>Aparente | Contacto</title>
            <meta name = "description" content = "Página donde puedes encontrar todos nuestros puntos de contacto."/>
        </Helmet>
        <MainBanner />
        <WhatsApp />
        </>
    );
}
