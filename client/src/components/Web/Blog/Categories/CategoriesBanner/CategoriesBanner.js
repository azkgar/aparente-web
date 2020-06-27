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
            <meta name = "description" content = "Página principal donde se encuentran todas las categorías del Blog con estilo de Aparente"/>
            <link rel = "canonical" href = "https://aparente.mx/categorias"/>
            <meta property = "og:title" content =  "Aparente | Categorías"/>
                <meta property = "og:description" content =  "Página principal donde se encuentran todas las categorías del Blog con estilo de Aparente"/>
                <meta property = "og:locale" content = "es_MX"/>
                <meta property = "og:type" content = "website"/>
                <meta property = "og:url" content =  {window.location.pathname + window.location.search}/>
                <meta property = "og:image" content = "http://aparente.mx/mstile-310x310.png" />
                <meta property = "og:image:secure_url" content = "https://aparente.mx/mstile-310x310.png" />
                <meta property = "og:image:type" content = "image/png" />
                <meta property = "og:image:width" content = "310" />
                <meta property = "og:image:height" content = "310" />
                <meta property = "og:image:alt" content = "Aparente" />
                <meta property = "og:site_name" content = "Aparente" />
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
