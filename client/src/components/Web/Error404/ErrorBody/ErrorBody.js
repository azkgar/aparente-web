import React from 'react';
import {Row,Col,Button} from "antd";
import Texto from "../../../../assets/img/png/APARENTE-404-texto.png";
import Pregunta from "../../../../assets/img/png/APARENTE-404-pregunta.png";
import Cta from "../../../../assets/img/png/APARENTE-404-flecha.png";
import LogoDoodle from "../../../../assets/img/png/APARENTE-404-logo.png";

import "./ErrorBody.scss";

export default function ErrorBody() {
    return (
        <div className = "error-body">
            <Row className = "error-body__text" >
                <Col lg = {4} md = {4} sm ={0} xs = {0}/>
                <Col lg = {16} md = {16} sm = {24} xs = {24}>
                    <img alt = "Esta página todavía no contrata nuestros servicios" src = {Texto} />
                </Col>
                <Col lg = {4} md = {4} sm ={0} xs = {0}/>
            </Row> 

            <Row className = "error-body__ask" >
                <Col lg = {4} md = {4} sm ={0} xs = {0}/>
                <Col lg = {16} md = {16} sm = {24} xs = {24}>
                    <img alt = "¿No te quieres ver así?" src = {Pregunta} />
                </Col>
                <Col lg = {4} md = {4} sm ={0} xs = {0}/>
            </Row> 

            <Row className = "error-body__cta" >
                <Col lg = {4} md = {4} sm ={4} xs = {4}/>
                <Col lg = {8} md = {8} sm = {8} xs = {8} className = "cta" >
                    <img alt = "Click en logo" src = {Cta} />
                </Col>
                <Col lg = {8} md = {8} sm = {8} xs = {8} className = "logo" >
                    <a href = "/">
                        <img alt = "Logo Aparente Doodle" src = {LogoDoodle} />
                    </a>
                </Col>
                <Col lg = {4} md = {4} sm ={4} xs = {4}/>
            </Row> 
        </div>
    )
}
