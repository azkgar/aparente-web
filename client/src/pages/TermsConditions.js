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
            <meta property = "og:title" content =  "Aparente | Términos y Condiciones"/>
            <meta property = "og:description" content =  "Página donde puedes encontrar los términos y condiciones de uso de cualquier página o aplicación web relacionada con Aparente®."/>
                <meta property = "og:locale" content = "es_MX"/>
                <meta property = "og:type" content = "website"/>
                <meta property = "og:url" content =  {window.location.pathname + window.location.search}/>
                <meta property = "og:image" content = "http://aparente.mx/mstile-310x310.png" />
                <meta property = "og:image:secure_url" content = "https://aparente.mx/mstile-310x310.png" />
                <meta property = "og:image:type" content = "image/png" />
                <meta property = "og:image:width" content = "310" />
                <meta property = "og:image:height" content = "310" />
                <meta property = "og:image:alt" content = "Aparente" />
                <meta property = "og:site_name" content = "Aparente" />
        </Helmet>
        <MainBanner />
        <Conditions />
        </>
    );
}