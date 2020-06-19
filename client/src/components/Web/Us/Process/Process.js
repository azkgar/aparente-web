import React from 'react';
import {Row, Col} from "antd";
import Know from "../../../../assets/img/png/APARENTE-conocete.png";
import Plan from "../../../../assets/img/png/APARENTE-planea.png";
import Launch from "../../../../assets/img/png/APARENTE-lanza.png";
import Analyze from "../../../../assets/img/png/APARENTE-analiza.png";
import Arrow1 from "../../../../assets/img/png/APARENTE-flecha-1.png";
import Arrow2 from "../../../../assets/img/png/APARENTE-flecha-2.png";
import Arrow3 from "../../../../assets/img/png/APARENTE-flecha-3.png";
import Arrow4 from "../../../../assets/img/png/APARENTE-flecha-4.png";

import "./Process.scss";

export default function Process() {
    return (
        <>
        <Row className = "process-title">
            <Col md = {4} />
            <Col md = {16}>
                <h2>Tu proceso<span>_</span></h2>
            </Col>
            <Col md = {4} />
        </Row>
        <Row className = "process-know" >
            <Col md = {4} />
            <Col md = {16}>
                <img alt = "Conócete" src = {Know}  /> 
            </Col>
            <Col md = {4} />
        </Row>
        <Row className = "arrow-1" >
            <Col md = {4} />
            <Col md = {16}>
                <img alt = "Flecha hacia abajo" src = {Arrow1} />
            </Col>
            <Col md = {4} />
        </Row>
        <Row className = "process-plan" >
            <Col md = {4} />
            <Col md = {16}>
                <img alt = "Planea" src = {Plan} />
            </Col>
            <Col md = {4} />
        </Row>
        <Row className = "arrow-2" >
            <Col md = {2} />
            <Col md = {8} className = "arrow-left">
            <img  alt = "Flecha" src = {Arrow4} />
            </Col> 
            <Col md = {4} />
            <Col md = {8} className = "arrow-right">
            <img alt = "Flecha" src = {Arrow2}  />
            </Col>
            <Col md = {2} />
        </Row>
        <Row className = "process-launch-analyze" >
            <Col md = {2} />
            <Col md = {8} className = "analyze">
            <img  alt = "Analiza" src = {Analyze} />
            </Col> 
            <Col md = {4} />
            <Col md = {8} className = "launch">
            <img alt = "Lanza" src = {Launch}  />
            </Col>
            <Col md = {2} />
        </Row>
        <Row className = "arrow-3" >
            <Col md = {4} />
            <Col md = {16}>
                <img alt = "Flecha" src = {Arrow3} />
            </Col>
            <Col md = {4} />
        </Row>
        </>
    )
}
