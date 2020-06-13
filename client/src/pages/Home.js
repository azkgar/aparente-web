import React from "react";
import {Helmet} from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import UsBanner from "../components/Web/UsBanner";

export default function Home(){
    return(
        <>
            <Helmet>
                <title>Aparente</title>
                <meta name = "description" content =  "Home | Web sobre apariencia y estilo"/>
            </Helmet>
            <MainBanner />
            <UsBanner />
        </>
    );
}