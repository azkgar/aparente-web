import React from 'react';
import {Row, Col, Card} from "antd";
import {ClockCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined, DollarOutlined, CheckCircleOutlined} from "@ant-design/icons";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
    return (
        <Row className = "how-my-courses-work">
            <Col lg = {24} className = "how-my-courses-work__title">
                <h2>¿Cómo funcionan mis cursos?</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de Udemy ,activa las 24 horas al día los 365 días del año
                </h3>
            </Col>

            <Col lg = {4} />
            <Col lg = {16}>
                <Row className = "row-cards">
                    <Col md = {8}>
                        <CardInfo icon = {<ClockCircleOutlined />} title = "Cursos y Clases" description = "Descripcion de los cursos que yo quise poner aquí porque él dijo eso" />
                    </Col>
                    <Col md = {8}>
                    <CardInfo icon = {<KeyOutlined />} title = "Acceso 24/7" description = "Descripcion de los cursos que yo quise poner aquí porque él dijo eso" />
                    </Col>
                    <Col md = {8}>
                    <CardInfo icon = {<MessageOutlined />} title = "Aprendizaje Colaborativo" description = "Descripcion de los cursos que yo quise poner aquí porque él dijo eso" />
                    </Col>
                </Row>
                <Row className = "row-cards">
                    <Col md = {8}>
                        <CardInfo icon = {<UserOutlined />} title = "Mejora tu perfil" description = "Descripcion de los cursos que yo quise poner aquí porque él dijo eso" />
                    </Col>
                    <Col md = {8}>
                    <CardInfo icon = {<DollarOutlined />} title = "Precios bajos" description = "Descripcion de los cursos que yo quise poner aquí porque él dijo eso" />
                    </Col>
                    <Col md = {8}>
                    <CardInfo icon = {<CheckCircleOutlined />} title = "Certificados de certificación" description = "Descripcion de los cursos que yo quise poner aquí porque él dijo eso" />
                    </Col>
                </Row>
            </Col>
            <Col lg = {4} />
        </Row>
    )
}

function CardInfo(props){
    const {icon, title, description} = props;
    const {Meta} = Card;

    return(
        <Card className = "how-my-courses-work__card">
            {icon}
            <Meta title = {title} description = {description} />
        </Card>
    )
}
