import React, {useState, useEffect} from 'react';
import {Row, Col, Input, Button, Form} from "antd";
import {SendOutlined} from "@ant-design/icons";
import mobile from "../../../../assets/img/png/APARENTE-WhatsApp.png";
import moment from "moment";

import "./WhatsApp.scss";

export default function WhatsApp() {
    const [time,setTime] = useState(moment().format("LT"));
    const [message, setMessage] = useState("");

    useEffect(() => {
        const interval = setInterval(() => setTime(moment().format("LT")), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    function handleChange(e){
        e.preventDefault();
        window.open(`https://api.whatsapp.com/send?phone=525612982728&text=${message}`, "__blank")
        setMessage("");
    }
    
    return (
        <div className = "whatsapp-form">
            <Row>
                <Col md = {12} sm = {24} className = "whatsapp-form__description">
                    <p>Contáctanos</p>
                </Col>
                <Col md = {12} sm = {24} className = "whatsapp-form__form">
                    <img alt = "Manda un WhatsApp al " src = {mobile} />
                    <p>{time}</p>
                    <Form onSubmit = {handleChange}>
                        <Form.Item>
                            <Input autoFocus = "autofocus" value = {message} onChange = {e => setMessage(e.target.value)}></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type = "primary" shape = "circle" size = "small" icon = {<SendOutlined style = {{ color: "white" }}/> } htmlType = "submit" onClick = {handleChange}></Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}
