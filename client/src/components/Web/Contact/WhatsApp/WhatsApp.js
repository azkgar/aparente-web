import React, {useState, useEffect} from 'react';
import {Row, Col, Input, Button, Form} from "antd";
import mobile from "../../../../assets/img/png/APARENTE-WhatsApp.png";
import moment from "moment";

import "./WhatsApp.scss";

export default function WhatsApp() {
    const [time,setTime] = useState(moment().format("LT"));

    useEffect(() => {
        const interval = setInterval(() => setTime(moment().format("LT")), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className = "whatsapp-form">
            <Row>
                <Col md = {12} sm = {24} className = "whatsapp-form__description">
                    <p>Contáctanos</p>
                </Col>
                <Col md = {12} sm = {24} className = "whatsapp-form__form">
                    <img alt = "Manda un WhatsApp al " src = {mobile} />
                    <p>{time}</p>
                    <Form>
                        <Form.Item>
                            <Input autoFocus = "autofocus"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button></Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}
