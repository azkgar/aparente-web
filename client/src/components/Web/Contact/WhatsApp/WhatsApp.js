import React, {useState, useEffect} from 'react';
import {Row, Col, Input, Button, Form, Divider} from "antd";
import {SendOutlined} from "@ant-design/icons";
import DesktopWA from "../../../../assets/img/png/APARENTE-WhatsApp.png";
import MobileWA from "../../../../assets/img/png/APARENTE-WhatsApp-mobile.png";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <Col lg = {12} md = {24} className = "whatsapp-form__description">
                    <h2>Hola<span>_</span></h2>
                    <p>¿Tienes dudas, preguntas, comentarios o quieres platicar? Puedes encontrarme en: </p>
                    <Divider />
                    <h3><FontAwesomeIcon icon={['far', 'envelope']} className = "email"/>  email<span>_</span></h3>
                    <a href = "mailto:contacto@aparente.mx" target = "__blank" rel = "noopener noreferrer">contacto@aparente.mx</a>
                    <Divider />
                    <h3><FontAwesomeIcon icon={['fas', 'phone']} className = "phone"/>  Teléfono<span>_</span></h3>
                    <a href = "tel:+525612982728" target = "__blank" rel = "noopener noreferrer">+52 56 1298 2728</a>
                    <Divider />
                    <h3><FontAwesomeIcon icon={['fas', 'user-plus']} className = "social"/>  Únete<span>_</span></h3>
                    <SocialBar />
                    <p className = "hashtag"> #SinAparienciaSomosEntes #NoMasEntes</p>
                    <Divider />
                </Col>
                <Col lg = {12} md = {24} className = "whatsapp-form__form">
                    <h2 className = "cta"><FontAwesomeIcon icon={['fab', 'whatsapp']} className = "whatsapp"/> WhatsApp<span>_</span></h2>
                    <img alt = "Manda un WhatsApp al " src = {window.innerWidth >= 790 ? DesktopWA : MobileWA} />
                    <p>{time}</p>
                    <Form onSubmit = {handleChange}>
                        <Form.Item>
                            <Input autoFocus = "autofocus" value = {message} onChange = {e => setMessage(e.target.value)} placeholder = "Escribe tu mensaje_" ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type = "primary" shape = "circle" size = "small" icon = {<SendOutlined /> } htmlType = "submit" onClick = {handleChange}></Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );

    function SocialBar() {
        return(
            <div className = "social-bar">
            <a href = "https://www.instagram.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'instagram']} className = "instagram" size = "3x" />}</a>
            <a href = "https://www.facebook.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'facebook-f']} className = "facebook" size = "3x" />} </a>
            <a href = "https://www.pinterest.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'pinterest-p']} className = "pinterest" size = "3x" />} </a>
            <a href = "https://www.youtube.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'youtube']} className = "youtube" size = "3x" />} </a>
            <a href = "https://www.linkedin.com/company/27186667" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'linkedin-in']} className = "linkedin" size = "3x" />} </a>
            </div>
        );
    }
}
