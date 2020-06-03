import React from 'react';
import {Row, Col} from "antd";
import machine from "../../../../assets/img/png/APARENTE-maquina-escribir.png";
import paper from "../../../../assets/img/png/APARENTE-hoja-lapiz.png";

import "./MainBanner.scss";

export default function MainBanner() {
    return (
        <Row className = "blog-main-banner" align = "middle">
            <Col span = {4} className = "blog-main-banner__machine">
                <img alt = "Aparente máquina de escribir" src = {machine} className = "maquina" /> 
            </Col>
            <Col span = {16}>
                <h1>blog<span>_</span></h1>
            </Col>
            <Col span = {4} className = "blog-main-banner__paper">
            <img alt = "Aparente lápiz y papel" src = {paper} className = "papel" /> 
            </Col>
        </Row>
    )
}
