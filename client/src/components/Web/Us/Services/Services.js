import React from 'react';
import {Row, Col} from "antd";

import "./Services.scss";

export default function Services() {
    return (
        <div className = "services">
        <h2 className = "services-title">Lo que sabemos hacer<span>_</span></h2>
        <Row className = "services-list">
            <Col md = {4} sm = {0} xs = {0}/>
            <Col md = {8} sm = {24} xs = {24} >
                <ul>
                    <li>Planeación y desarrollo de páginas web</li>
                    <li>Campañas de publicidad en internet</li>
                    <li>Analítica de páginas web</li>
                    <li>Innovación y resolución de problemas usando la metodología Sprint</li>
                </ul>
            </Col>
            <Col md = {8} sm = {24} xs = {24} >
                <ul>
                    <li>Imagen personal</li>
                    <li>Imagen de marca o producto</li>
                    <li>Imagen digital</li>
                    <li>Capacitación de personal</li>
                    <li>Conferencias</li>
                </ul>
            </Col>
            <Col md = {4} sm = {0} xs = {0} />
        </Row>
        </div>
    )
}
