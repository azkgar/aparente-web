import React, {useState, useEffect} from "react";
import {getCategoriesApi} from "../../../api/category";
import CategoriesList from "../../../components/Admin/BlogCategories/CategoriesList";

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
        <div className = "menu-web">
            <CategoriesList categories = {categories} setReloadCategories = {setReloadCategories} />
        </div>
    );
}