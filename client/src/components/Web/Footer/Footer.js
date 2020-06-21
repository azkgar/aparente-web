import React from 'react';
import {Layout, Row, Col} from "antd";
import MyInfo from "./MyInfo";
import NavigationFooter from "./NavigationFooter";
import Newsletter from "../Newsletter";
import moment from "moment";

import "./Footer.scss";

export default function Footer() {
    const {Footer} = Layout;

    return (
        <Footer className = "footer">
            <Row>
                <Col lg = {4} md = {4} sm = {0} xs ={0}/>
                <Col lg = {16} md = {16} sm = {24} xs ={24}>
                    <Row>
                        <Col lg = {8} md = {24} sm = {24} xs = {24} className = "info">
                            <MyInfo />
                        </Col>
                        <Col lg = {8} md = {24} sm = {24} xs = {24} className = "navigation">
                            <NavigationFooter />
                        </Col>
                        <Col lg = {8} md = {24} sm = {24} xs = {24} className = "newsletter">
                            <Newsletter />
                        </Col>
                    </Row>
                </Col>
                <Col lg = {4} md = {4} sm = {0} xs ={0}/>
            </Row>
            <Row className = "footer__copyright">
                <Col md = {12} sm ={24} xs = {24}>
                    Creado con estilo por Aparente®
                </Col>
                <Col md = {12} sm ={24} xs = {24}>
                    Todos los derechos reservados {moment().year()}
                </Col>
            </Row>
        </Footer>
    )
}
