import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";
import MainBanner from "../components/Web/Us/MainBanner";
import Privacy from "../components/Web/Privacy";

export default function Contact() {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
      
    return (
        <>
        <Helmet>
            <title>Aparente | Aviso de Privacidad</title>
            <meta name = "description" content = "Página donde puedes encontrar el Aviso de Privacidad para los datos recopilados en cualquier página o aplicación web relacionada con Aparente®."/>
            <link rel = "canonical" href = "https://aparente.mx/aviso-de-privacidad"/>
        </Helmet>
        <MainBanner />
        <Privacy />
        </>
    );
}