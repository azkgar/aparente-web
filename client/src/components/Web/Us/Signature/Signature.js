import React from 'react';
import {Row, Col} from "antd";
import SmallLogo from "../../../../assets/img/png/APARENTE-logo-compacto.png"

import "./Signature.scss";

export default function Signature() {
    return (
        <Row className = "signature">
            <Col md = {4} />
            <Col md = {16}>
                <img alt = "Logo compacto de aparente" src = {SmallLogo} className = "compact-logo"/>
                <h3 className = "slogan" >Sin apariencia somos entes<sup>®</sup></h3>
            </Col>
            <Col md = {4}/>
        </Row>
    )
}
