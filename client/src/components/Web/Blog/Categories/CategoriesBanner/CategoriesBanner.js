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

    const urlCategory = (function() {
        let from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
            to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
            mapping = {};
       
        for(let i = 0, j = from.length; i < j; i++ )
            mapping[ from.charAt( i ) ] = to.charAt( i );
       
        return function( str ) {
            let ret = [];
            for( let i = 0, j = str.length; i < j; i++ ) {
                let c = str.charAt( i );
                if( mapping.hasOwnProperty( str.charAt( i ) ) )
                    ret.push( mapping[ c ] );
                else
                    ret.push( c );
            }      
            return ret.join( '' ).replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();;
        }
      })();

    if(!categories){
        return (
            <Spin tip = "Cargando" style = {{width: "100%", padding: "200px 0"}} />
        )
    }
    

    return (
        <>
        <Helmet>
            <title>Aparente | Categorías</title>
            <meta name = "description" content = "Pagina principal de las categorías principales de las publicaciones del Blog con estilo de Aparente"/>
        </Helmet>
        <div className = "categories-list">
            <h2>¿Buscas un tema específico?</h2>
            {categories.map(category => (
                <Link to ={`/categorias/${category.url}`} key = {category._id}>
                <div className = "categories-list__item">
                    <img alt = {category.tag} src = {category.avatar ? require(`../../../../../../../server/uploads/categories/${category.avatar}`) : require("../../../../../assets/img/png/Missing.png") }/>
                    <h4>{category.tag}</h4>
                </div>
                </Link>
            ))}
        </div>
        </>
    )
}
