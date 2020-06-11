import React from 'react';
import {Helmet} from "react-helmet";
import MainBanner from "../components/Web/Us/MainBanner";

export default function Us() {
    return (
        <>
        <Helmet>
            <title>Aparente | Nosotros</title>
            <meta name = "description" content = "Página donde puedes encontrar qué es aparente y los valores con los que trabaja"/>
        </Helmet>
        <MainBanner />
        </>
    );
}