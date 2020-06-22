import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";

export default function Admin(){
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
      
    return (
        <>
        <Helmet>
                <title>Admin | Inicio</title>
                <meta name = "description" content =  "Consola de administrador de Aparente. Página principal del sitio de la consola de administrador de Aparente"/>
        </Helmet>
        <div>
            <h1>Estamos en Admin</h1>
        </div>
        </>
    );
}