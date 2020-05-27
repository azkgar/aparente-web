import React from "react";
import {Route, Switch} from "react-router-dom"
import {Layout, Row, Col} from "antd";
import MenuTop from "../components/Web/MenuTop";
import MenuBoot from "../components/Web/MenuBoot";

import "./LayoutBasic.scss";

export default function LayoutBasic(props){
    const {routes} = props;
    const {Footer} = Layout;

    return (
        <>
            {/* <Row>
                <Col md={4}/>
                <Col md={16}>
                <MenuTop />
                </Col>
                <Col md={4}/>
            </Row> */}
            <MenuBoot />
            <LoadRoutes routes={routes}/>
            <Footer>
                Creado con estilo por Aparente® 2020
            </Footer>
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