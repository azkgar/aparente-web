import React from 'react';
import {Row, Col} from "antd";

import "./TermsPrivacy.scss";

export default function TermsPrivacy() {
    return (
        <div className = "terms-privacy">
            <Row>
                <Col xs = {12}>
                    <a href = "/aviso-de-privacidad" >Aviso de Privacidad</a>
                </Col>
                <Col xs = {12}>
                    <a href = "/terminos-y-condiciones" >Términos y Condiciones</a>
                </Col>
            </Row>
        </div>
    )
}
