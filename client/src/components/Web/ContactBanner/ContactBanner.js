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
        <div className = "contact-banner-home">
        <Row className = "contact-banner-title">
            <Col md = {4}  sm = {0} xs = {0}/>
            <Col md = {16}  sm = {24} xs = {24}>
                <h2>Cumplir tu objetivo está a un clic de distancia</h2>
            </Col>
            <Col md = {4}  sm = {0} xs = {0}/>
        </Row>
        <Row className = "contact-banner-whatsapp">
            <Col md = {4}  sm = {0} xs = {0}/>
            <Col md = {16}  sm = {24} xs = {24}>
                <Form onSubmit = {handleChange}>
                <Row>
                    <Col md = {6}  sm = {0} xs = {0}/>
                    <Col md = {10}  sm = {24} xs = {24}>
                    <Form.Item>
                        <Input value = {message} onChange = {e => setMessage(e.target.value)} placeholder = "Escribe tu mensaje_" ></Input>
                    </Form.Item>
                    </Col>
                    <Col md = {4}  sm = {24} xs = {24} className = "whatsapp-btn">
                    <Form.Item>
                        <Button type = "primary" shape = "round" size = "middle" icon = {<FontAwesomeIcon icon={['fab', 'whatsapp']} className = "whatsapp"/>} htmlType = "submit" onClick = {handleChange} > Enviar </Button>
                    </Form.Item>
                    </Col>
                    <Col md = {4}  sm = {0} xs = {0}/>
                    </Row>
                </Form>
                <Divider/>
            </Col>
            <Col md = {4}  sm = {0} xs = {0}/>
        </Row>
        <Row className = "contact-banner-medium">
            <Col md = {4}  sm = {0} xs = {0}/>
            <Col md = {8}  sm = {24} xs = {24} className = "top-column">
                <h3><FontAwesomeIcon icon={['far', 'envelope']} className = "email"/>  email<span>_</span></h3>
                <a href = "mailto:contacto@aparente.mx" target = "__blank" rel = "noopener noreferrer">contacto@aparente.mx</a>
            </Col>
            <Col md = {8}  sm = {24} xs = {24}>
                <h3><FontAwesomeIcon icon={['fas', 'phone']} className = "phone"/>  Teléfono<span>_</span></h3>
                <a href = "tel:+525612982728" target = "__blank" rel = "noopener noreferrer">+52 56 1298 2728</a>    
            </Col>
            <Col md = {4}  sm = {0} xs = {0}/>
        </Row>
        <Row className = "contact-banner-button">
        <Col md = {8}  sm = {0} xs = {0}/>
        <Col md = {8}  sm = {24} xs = {24}> 
            <Button size = "large" href = "/contacto">Más medios_</Button>
        </Col>
        <Col md = {8}  sm = {0} xs = {0}/>
        </Row>
        </div>
    )
}
