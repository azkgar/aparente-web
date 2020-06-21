import React, {useState, useEffect} from 'react';
import {Col} from "antd";
import {getCategoriesApi} from "../../../../api/category";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from "antd";

import "./Sider.scss";

export default function Sider() {

const [categories, setCategories] = useState([]);

useEffect( () => {
    getCategoriesApi().then(response => {
        const arrayCategories = [];
        response.category.forEach(item => {
            item.active && arrayCategories.push({category: item.tag, cover: item.avatar, url: item.url});
        });
        setCategories(arrayCategories);
    });
}, []);

    return (
        <Col md={5} sm = {24} className = "side-menu">
            {/*<h2>¡Hola!</h2>*/}

            <h2>Únete<span>_</span></h2>
            <SocialButtons />
            <Link to = "/categorias">
            <h2>Categorías<span>_</span></h2>
            </Link>
            <CategoriesList categories = {categories} />
        </Col>
    );

    function CategoriesList(props) {
        const {categories} = props;

        return(
            <div className = "categories-container">
                {categories.map( item  => {
                    return(
                        <Link to = {`/categorias/${item.url.toLowerCase()}`} key = {item.category}>
                        <img alt = {item.category} src = {item.cover === undefined ? require("../../../../assets/img/png/Missing.png") : require(`../../../../../../server/uploads/categories/${item.cover}`)} />
                        </Link>
                    );
                })}
            </div>
        );
    }

    function SocialButtons() {
        return(
            <div className = "social-container">
            <a href = "https://www.instagram.com/aparenteMX"
            target = "_blank"
            rel = "noopener noreferrer">
            <Button shape = "circle" icon = {<FontAwesomeIcon icon={['fab', 'instagram']} className = "instagram"/>} size = "large" ></Button>
            </a>
            <a href = "https://www.facebook.com/Aparentemx"
            target = "_blank"
            rel = "noopener noreferrer">
            <Button shape = "circle" icon = {<FontAwesomeIcon icon={['fab', 'facebook-f']} className = "facebook"/>} size = "large" ></Button>
            </a>
            <a href = "https://www.pinterest.com/AparenteMX"
            target = "_blank"
            rel = "noopener noreferrer">
            <Button shape = "circle" icon = {<FontAwesomeIcon icon={['fab', 'pinterest-p']} className = "pinterest"/>} size = "large" ></Button>
            </a>
            {/*<a href = "https://www.youtube.com/AparenteMX"
            target = "_blank"
            rel = "noopener noreferrer">
            <Button shape = "circle" icon = {<FontAwesomeIcon icon={['fab', 'youtube']} className = "youtube"/>} size = "large" ></Button>
            </a>*/}
            </div>
        );
    }
}
