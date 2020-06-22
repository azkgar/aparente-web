import React, {useState, useEffect} from "react";
import {getCategoriesApi} from "../../../api/category";
import CategoriesList from "../../../components/Admin/BlogCategories/CategoriesList";
import {Helmet} from "react-helmet";
import ReactGa from "react-ga";

export default function Categories()  {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
      
    const [categories, setCategories] = useState([]);
    const [reloadCategories, setReloadCategories] = useState(false);

    useEffect(() => {
        getCategoriesApi().then(response => {
            setCategories(response.category);
        });
        setReloadCategories(false);
    }, [reloadCategories]);

    return(
        <>
        <Helmet>
                <title>Admin | Categorías</title>
                <meta name = "description" content =  "Consola de administrador de Aparente. Página para agregar, eliminar y modificar categorías"/>
        </Helmet>
        <div className = "menu-web">
            <CategoriesList categories = {categories} setReloadCategories = {setReloadCategories} />
        </div>
        </>
    );
}