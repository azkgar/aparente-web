import React, {useEffect} from 'react';
import MainBanner from "../components/Web/Contact/MainBanner";
import WhatsApp from "../components/Web/Contact/WhatsApp";
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";

export default function Contact() {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
      
    return (
        <>
        <Helmet>
            <title>Aparente | Contacto</title>
            <meta name = "description" content = "Página donde puedes encontrar teléfonos, correo electrónico, ligas a redes sociales y mandar WhatsApp para contactarme."/>
            <link rel = "canonical" href = "https://aparente.mx/contacto"/>
        </Helmet>
        <MainBanner />
        <WhatsApp />
        </>
    );
}
