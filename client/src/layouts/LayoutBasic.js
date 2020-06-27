import React from "react";
import {Route, Switch} from "react-router-dom"
import MenuBoot from "../components/Web/MenuBoot";
import Footer from "../components/Web/Footer";
import TermsPrivacy from "../components/Web/Footer/TermsPrivacy";

import "./LayoutBasic.scss";

export default function LayoutBasic(props){
    const {routes} = props;

    return (
        <>
            <MenuBoot />
            <LoadRoutes routes={routes}/>
            <Footer />
            <TermsPrivacy />
        </>
    )
}

function LoadRoutes({routes}){
    return(
        <Switch>
            {
                routes.map((route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))  
            }
        </Switch>
    );
}