import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";

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
    </Helmet>
    <div>
        <h2>Error 404</h2>
    </div>
    </>
    );
}