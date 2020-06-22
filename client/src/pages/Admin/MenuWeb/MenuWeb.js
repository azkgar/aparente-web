import React, {useState, useEffect} from "react";
import {getMenuApi} from "../../../api/menu";
import MenuWebList from "../../../components/Admin/MenuWeb/MenuWebList";
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";

export default function MenuWeb()  {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
      
    const [menu, setMenu] = useState([]);
    const [reloadMenuWeb, setReloadMenuWeb] = useState(false);

    useEffect(() => {
        getMenuApi().then(response => {
            setMenu(response.menu);
        });
        setReloadMenuWeb(false);
    }, [reloadMenuWeb]);

    return(
        <>
        <Helmet>
                <title>Admin | Menú</title>
                <meta name = "description" content =  "Consola de administrador de Aparente. Página para agregar, eliminar y modificar el menú"/>
        </Helmet>
        <div className = "menu-web">
            <MenuWebList menu = {menu} setReloadMenuWeb = {setReloadMenuWeb} />
        </div>
        </>
    );
}