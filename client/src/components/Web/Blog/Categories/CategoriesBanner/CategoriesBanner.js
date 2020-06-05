import React, {useEffect, useState} from 'react'
import { Row, Col, Carousel, Avatar } from 'antd';
import {getCategoriesApi} from "../../../../../api/category";
//import noCover from "../../../../assets/img/png/Missing.png";

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
        <div>Categorías</div>
    )
}
