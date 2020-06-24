import React, {useEffect, useState} from 'react'
import {getCategoriesApi} from "../../../../../api/category";
import {Link} from "react-router-dom";
import {Spin} from "antd";
import {Helmet} from "react-helmet";

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
        <>
        <Helmet>
            <title>Aparente | Categorías</title>
            <meta name = "description" content = "Pagina principal donde se encuentran todas las categorías del Blog con estilo de Aparente"/>
            <link rel = "canonical" href = "https://aparente.mx/categorias"/>
        </Helmet>
        <div className = "categories-list">
            <h2>¿Buscas un tema específico?</h2>
            {categories.map(category => {
                return(
                <Link to ={`/categorias/${category.url}`} key = {category._id}>
                <div className = "categories-list__item">
                    <img alt = {category.tag} src = {category.avatar ? `https://aparente-server.herokuapp.com/api/v1/get-category-cover/${category.avatar}` : require("../../../../../assets/img/png/Missing.png") }/>
                </div>
                </Link>
                );
            })}
        </div>
        </>
    )
}
