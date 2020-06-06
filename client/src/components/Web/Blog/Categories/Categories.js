import React from 'react';
import CategoriesBanner from "./CategoriesBanner";
import MainBanner from "../MainBanner";
import CategoryPage from "./CategoryPage";

import "./Categories.scss";

export default function Categories() {
    return (
        <div>
            <MainBanner />
            <CategoriesBanner />
        </div>
    )
}
