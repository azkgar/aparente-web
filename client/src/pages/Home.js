import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import UsBanner from "../components/Web/UsBanner";
import BlogBanner from "../components/Web/BlogBanner";
import ContactBanner from "../components/Web/ContactBanner";
import ReactGa from "react-ga";

export default function Home(){
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);

    return(
        <>
            <Helmet>
                <title>Aparente | Inicio</title>
                <meta name = "description" content =  "Consultoría en imagen. Desarrollamos estrategias para que personas y marcas usen su imagen como una herramienta que los impulse hacia sus metas"/>
                <link rel = "canonical" href = "https://aparente.mx/"/>
                <meta property = "og:title" content =  "Aparente"/>
                <meta property = "og:description" content =  "Desarrollamos estrategias para que personas y marcas usen su imagen como una herramienta que los impulse hacia sus metas"/>
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
            <UsBanner />
            <BlogBanner />
            <ContactBanner />
        </>
    );
}