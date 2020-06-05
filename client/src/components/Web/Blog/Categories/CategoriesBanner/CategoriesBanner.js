import React, {useEffect, useState} from 'react'
import {getCategoriesApi} from "../../../../../api/category";
import {Link} from "react-router-dom";


import "./CategoriesBanner.scss";

export default function CategoriesBanner() {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        getCategoriesApi().then(response => {
            const arrayCategories = [];
            response.category.forEach(item => {
                item.active && arrayCategories.push(item);
            });
            setCategories(arrayCategories);
        });
    }, []);

    console.log(categories);
    

    return (
        <div>
            <h2>Encuentra publicaciones relacionadas al tema de tu interés</h2>
            {categories.map(category => (
                <Link to ={`categorias/${category.tag.toLowerCase()}`} key = {category._id}>
                <div>
                    <img alt = {category.tag} src = {category.avatar ? require(`../../../../../../../server/uploads/categories/${category.avatar}`) : require("../../../../../assets/img/png/Missing.png") }/>
                    <h4>{category.tag}</h4>
                </div>
                </Link>
            ))}
        </div>
    )
}
