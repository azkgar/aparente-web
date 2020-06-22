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
            </Helmet>
            <MainBanner />
            <UsBanner />
            <BlogBanner />
            <ContactBanner />
        </>
    );
}