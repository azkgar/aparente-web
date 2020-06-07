import React, {useEffect, useState} from 'react'
import {getCategoriesApi} from "../../../../../api/category";
import {Link} from "react-router-dom";
import {Spin} from "antd";


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

    if(!categories){
        return (
            <Spin tip = "Cargando" style = {{width: "100%", padding: "200px 0"}} />
        )
    }
    

    return (
        <div className = "categories-list">
            <h2>¿Buscas un tema específico?</h2>
            {categories.map(category => (
                <Link to ={`/categorias/${category.tag.toLowerCase()}`} key = {category._id}>
                <div className = "categories-list__item">
                    <img alt = {category.tag} src = {category.avatar ? require(`../../../../../../../server/uploads/categories/${category.avatar}`) : require("../../../../../assets/img/png/Missing.png") }/>
                    <h4>{category.tag}</h4>
                </div>
                </Link>
            ))}
        </div>
    )
}
