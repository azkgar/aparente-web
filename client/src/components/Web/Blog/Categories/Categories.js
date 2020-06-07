import React from 'react';
import CategoriesBanner from "./CategoriesBanner";
import MainBanner from "../MainBanner";
import CategoryPage from "./CategoryPage";
import {useParams} from "react-router-dom";

import "./Categories.scss";

export default function Categories() {
    const {tag} = useParams();

    return (
        <div>
            <MainBanner />
            { tag ? <CategoryPage tag = {tag}/> : <CategoriesBanner />}
        </div>
    )
}
