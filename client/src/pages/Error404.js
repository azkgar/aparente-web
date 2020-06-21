import React from "react";
import {Helmet} from "react-helmet";

export default function Error404() {
    return(
        <>
        <Helmet>
                <title>Aparente | No Encontrado</title>
                <meta name = "description" content =  "Página 404. Está página todavía no contrata nuestros servicios. Si no te quieres ver así visita aparente.mx/contacto"/>
            </Helmet>
    <div>
        <h2>Error 404</h2>
    </div>
    </>
    );
}