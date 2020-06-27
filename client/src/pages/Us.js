import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import MainBanner from "../components/Web/Us/MainBanner";
import Welcome from "../components/Web/Us/Welcome";
import Services from "../components/Web/Us/Services";
import Process from "../components/Web/Us/Process";
import Signature from "../components/Web/Us/Signature";
import ReactGa from "react-ga";

export default function Us() {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);

    return (
        <>
        <Helmet>
            <title>Aparente | Nosotros</title>
            <meta name = "description" content = "Página donde puedes encontrar qué es aparente, los servicios que ofrece y la metodología que utiliza en sus servicios"/>
            <link rel = "canonical" href = "https://aparente.mx/nosotros"/>
            <meta property = "og:title" content =  "Aparente | Nosotros"/>
                <meta property = "og:description" content =  "Página donde puedes encontrar qué es aparente, los servicios que ofrece y la metodología que utiliza en sus servicios"/>
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
        <Welcome />
        <Services />
        <Process />
        <Signature />
        </>
    );
}