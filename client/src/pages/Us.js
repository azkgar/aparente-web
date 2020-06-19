import React from 'react';
import {Helmet} from "react-helmet";
import MainBanner from "../components/Web/Us/MainBanner";
import Welcome from "../components/Web/Us/Welcome";
import Services from "../components/Web/Us/Services";
import Process from "../components/Web/Us/Process";
import Signature from "../components/Web/Us/Signature";

export default function Us() {
    return (
        <>
        <Helmet>
            <title>Aparente | Nosotros</title>
            <meta name = "description" content = "Página donde puedes encontrar qué es aparente, los servicios que ofrece y la metodología que utiliza en sus servicios"/>
        </Helmet>
        <MainBanner />
        <Welcome />
        <Services />
        <Process />
        <Signature />
        </>
    );
}