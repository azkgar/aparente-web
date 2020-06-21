import React from "react";
import {Helmet} from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import UsBanner from "../components/Web/UsBanner";
import BlogBanner from "../components/Web/BlogBanner";
import ContactBanner from "../components/Web/ContactBanner";

export default function Home(){
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