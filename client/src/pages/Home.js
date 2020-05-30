import React from "react";
import {Helmet} from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import HomeCourses from "../components/Web/HomeCourses";

export default function Home(){
    return(
        <>
            <Helmet>
                <title>Aparente</title>
            </Helmet>
            <MainBanner />
            <HomeCourses />
        </>
    );
}