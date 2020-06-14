import React, {useEffect, useState} from 'react';
import {Row, Col, Button, Spin, Divider} from "antd";
import { getAllPostsApi} from "../../../api/post";
import {getCategoriesApi} from "../../../api/category";
import {Link} from "react-router-dom";
import Missing from "../../../assets/img/png/Missing.png";

import "./BlogBanner.scss";

export default function BlogBanner() {
const [posts, setPosts] = useState();
const [categories, setCategories] = useState();

useEffect(() => {
    getAllPostsApi().then(response => {
        setPosts(response.posts.reverse()[0]);
    });
    getCategoriesApi().then(response => {
        const categoryArray = [];
        response.category.map(category => {
            category.active && categoryArray.push(category);
        });
        setCategories(categoryArray);
    })
}, []); 

console.log(categories);

if(!posts || !categories){
    return (
        <Spin tip = "Cargando" style = {{width: "100%", padding: "200px 0"}} />
    );
}

    return (
        <div className = "blog-home-banner">
            
            <Row>
                <Col md = {4} sm = {0} />
                <Col md = {16} sm = {24}>
                    <h2 className = "blog-home-banner__title">Empieza ahora mismo</h2>
                    <p className = "blog-home-banner__description">Encuentra recomendaciones para mejorar tu imagen <strong>gratis</strong><span>_</span></p>
                </Col>
                <Col md = {4} sm = {0} />
            </Row>
            <Categories categories = {categories} />
            <Divider plain className = "divider">Última publicación</Divider>
            <Row>
                <Col md = {4} sm = {0} />
                <Col md = {16} sm = {24}>
                <Link to = {`/blog/${posts.url}`} >
                    <img className = "post-cover" alt = {`Imagen relacionada con el post títulado ${posts.title}`} src = {posts.cover ? posts.cover : Missing} />
                </Link>
                <Button className = "blog-home-banner__button" size = "large" href = "/blog">Más publicaciones_</Button>
                </Col>
                <Col md = {4} sm = {0} />
            </Row>
        </div>
    )

    function Categories(props){
        const {categories} = props;

        return(
            <Row className = "categories-row" justify = "center">
                {categories.map(category => (
                    <Col md = {4} sm = {6} key = {category._id}>
                        <Link to = {`/categorias/${category.tag}`} >
                            <img className = "category-cover" alt = {`Portada de temas del blog relacionados con ${category.tag}`} src = {category.avatar ? require(`../../../../../server/uploads/categories/${category.avatar}`) : Missing}/>
                        </Link>
                    </Col>
                   
                ))}
            </Row>
        );
    }
}
