import React, {useState, useEffect} from "react";
import {getCategoriesApi} from "../../../api/category";
import CategoriesList from "../../../components/Admin/BlogCategories/CategoriesList";
import {Helmet} from "react-helmet";

export default function Categories()  {
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