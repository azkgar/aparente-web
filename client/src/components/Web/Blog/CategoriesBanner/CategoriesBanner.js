import React, {useEffect, useState} from 'react'
import { Row, Col, Carousel, Avatar } from 'antd';
import {getCategoriesApi} from "../../../../api/category";
import noCover from "../../../../assets/img/png/Missing.png";

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

    return (
        <Row>
            <CategoriesCarousel categories = {categories} />
        </Row>
    )

    function CategoriesCarousel(props){
        const {categories} = props;

        return(
            <Carousel effect = "fade">
                {categories.map(category => (
                    <div key = {category.id}>
                    <img alt = {category.title} src = {category.avatar ? `../../../../../../server/uploads/categories/${category.avatar}` : noCover}/>
                    </div>
                ))}
            </Carousel>
        );
    }
}
