import React from "react";
import {Helmet} from "react-helmet";

export default function Admin(){
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