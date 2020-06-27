import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";
import ErrorBanner from "../components/Web/Error404/ErrorBanner";
import ErrorBody from "../components/Web/Error404/ErrorBody";

export default function Error404() {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);

    return(
    <>
    <Helmet>
        <title>Aparente | No Encontrado</title>
        <meta name = "description" content =  "Página 404. Está página todavía no contrata nuestros servicios. Si no te quieres ver así visita aparente.mx/contacto"/>
        <meta property = "og:title" content =  "Aparente | No Encontrado"/>
                <meta property = "og:description" content =  "Página 404. Está página todavía no contrata nuestros servicios. Si no te quieres ver así visita aparente.mx/contacto"/>
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
    <div>
        <ErrorBanner />
        <ErrorBody />
    </div>
    </>
    );
}