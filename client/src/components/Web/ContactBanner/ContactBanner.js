import React, {useState} from 'react';
import {Row, Col, Input, Form, Button, Divider} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./ContactBanner.scss";

export default function ContactBanner() {
    const [message, setMessage] = useState("");

    function handleChange(e){
        e.preventDefault();
        window.open(`https://api.whatsapp.com/send?phone=525612982728&text=${message}`, "__blank")
        setMessage("");
    }

    return (
        <>
        <Row className = {"contact-banner-title"}>
            <Col lg = {4}/>
            <Col lg ={16}>
                <h2>Contáctanos<span>_</span></h2>
            </Col>
            <Col lg = {4}/>
        </Row>
        <Row className = {"contact-banner-whatsapp"}>
            <Col lg = {4}/>
            <Col lg ={16}>
                <Form onSubmit = {handleChange}>
                    <Form.Item>
                        <Input value = {message} onChange = {e => setMessage(e.target.value)} placeholder = "Escribe tu mensaje_" ></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type = "primary" shape = "circle" size = "middle" icon = {<FontAwesomeIcon icon={['fab', 'whatsapp']} className = "whatsapp"/>} htmlType = "submit" onClick = {handleChange}></Button>
                    </Form.Item>
                </Form>
                <Divider/>
            </Col>
            <Col lg = {4}/>
        </Row>
        <Row className = {"contact-banner-medium"}>
            <Col lg = {4}/>
            <Col lg = {8}>
                <h3><FontAwesomeIcon icon={['far', 'envelope']} className = "email"/>  email<span>_</span></h3>
                <a href = "mailto:contacto@aparente.mx" target = "__blank" rel = "noopener noreferrer">contacto@aparente.mx</a>
            </Col>
            <Col lg = {8}>
                <h3><FontAwesomeIcon icon={['fas', 'phone']} className = "phone"/>  Teléfono<span>_</span></h3>
                <a href = "tel:+525612982728" target = "__blank" rel = "noopener noreferrer">+52 56 1298 2728</a>    
            </Col>
            <Col lg = {4}/>
        </Row>
        <Row className = {"contact-banner-button"}>
        <Col lg = {8}/>
        <Col lg ={8}>
            <Button size = "large" block href = "/contacto">Más medios_</Button>
        </Col>
        <Col lg = {8}/>
        </Row>
        </>
    )
}
