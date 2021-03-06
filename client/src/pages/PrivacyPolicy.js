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
            <meta property = "og:title" content =  "Aparente | Aviso de Privacidad"/>
            <meta property = "og:description" content =  "Página donde puedes encontrar el Aviso de Privacidad para los datos recopilados en cualquier página o aplicación web relacionada con Aparente®."/>
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
        <Privacy />
        </>
    );
}