import React from 'react';
import {Row,Col} from "antd";
import Hombre from "../../../../assets/img/png/APARENTE-404-hombre.png";
import Frase from "../../../../assets/img/png/APARENTE-404-eslogan.png";
import Mujer from "../../../../assets/img/png/APARENTE-404-mujer.png"; 

import "./ErrorBanner.scss";

export default function ErrorBanner() {
    return (
        <div className = "error-main-banner">
            <Row>
                <Col lg = {4} md = {4} sm ={8} xs = {8}>
                    <img alt = "hombre hecho con bolitas y palitos" src = {Hombre} className = "doodle"/>
                </Col>
                <Col lg = {16} md = {16} sm ={8} xs = {8}>
                    <img alt = "eslogan de aparente escrito a mano" src = {Frase} />
                </Col>
                <Col lg = {4} md = {4} sm ={8} xs = {8}>
                    <img alt = "mujer hecha con bolitas y palitos" src = {Mujer} className = "doodle"/>
                </Col>
            </Row>
        </div>
    )
}
