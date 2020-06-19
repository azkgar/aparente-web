import React from 'react';
import {Row, Col} from "antd";

import "./Welcome.scss";

export default function Welcome() {
    return (
        <Row>
            <Col md = {4} />
            <Col md = {16}>
                <h2 className = "welcome-header">Bienvenido<span>_</span></h2>
                <p className = "welcome-text">Aparente<sup className = "welcome-mr">®</sup> te brinda herramientas que te ayudan a <span>mejorar tu imagen</span> para que salgas de las “sombras”, te adueñes del reflector y te conviertas en una <span>mejor versión de ti.</span></p>
            </Col>
            <Col md = {4} />
        </Row>
    )
}
