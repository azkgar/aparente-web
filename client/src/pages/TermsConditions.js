import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";
import Conditions from "../components/Web/Conditions";
import MainBanner from "../components/Web/Us/MainBanner";

export default function Contact() {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
      
    return (
        <>
        <Helmet>
            <title>Aparente | Términos y Condiciones</title>
            <meta name = "description" content = "Página donde puedes encontrar los términos y condiciones de uso de cualquier página o aplicación web relacionada con Aparente®."/>
            <link rel = "canonical" href = "https://aparente.mx/terminos-y-condiciones"/>
        </Helmet>
        <MainBanner />
        <Conditions />
        </>
    );
}