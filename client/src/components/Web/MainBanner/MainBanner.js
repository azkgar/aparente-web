import React from "react";
import {Row, Col} from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
    return(
        <div className = "main-banner"> 
            <Row>
                <Col lg = {4} />
                <Col lg = {16}> 
                    <h1>SIN APARIENCIA <br/> SOMOS <span className = "entes">ENTES</span><span className = "guion-bajo">_</span></h1>
                </Col>
                <Col lg = {4} />
            </Row>

        </div>
    )
}