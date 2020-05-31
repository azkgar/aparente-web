import React, {useState, useEffect} from "react";
import {getCategoriesApi} from "../../../api/category";
import MenuWebList from "../../../components/Admin/MenuWeb/MenuWebList";

export default function CategoriesWeb()  {
    const [categories, setCategories] = useState([]);
    const [reloadCategoriesWeb, setReloadCategoriesWeb] = useState(false);

    useEffect(() => {
        getCategoriesApi().then(response => {
            setCategories(response.category);
        });
        setReloadCategoriesWeb(false);
    }, [reloadCategoriesWeb]);

    return(
        <div className = "menu-web">
        <h1>menú de categorias</h1>
            {/*<MenuWebList categories = {categories} setReloadCategoriesWeb = {setReloadCategoriesWeb} />*/}
        </div>
    );
}