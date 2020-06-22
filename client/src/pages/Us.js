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
        </Helmet>
        <MainBanner />
        <Welcome />
        <Services />
        <Process />
        <Signature />
        </>
    );
}