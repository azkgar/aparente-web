import React from 'react';
import {Row, Col, Card, Avatar} from "antd";
import AvatarPersona from "../../../assets/img/png/no-avatar.png";


import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
    return (

            <Row className = "reviews-courses">
                <Row>
                    <Col lg = {4} />
                    <Col lg = {16} className="review-courses__title">
                        <h2> Forma parte de los +35 mil estudiantes que están aprendiendo con mis cursos</h2>
                    </Col>
                    <Col lg = {4} />
                </Row>
                <Row>
                    <Col lg ={4}/>
                    <Col lg = {16}>
                        <Row className = "row-cards">
                            <Col md ={8}>
                                <CardReview name = "Alonso Campos" subtitle = "Alumno de Udemy" avatar = {AvatarPersona} review = "La descripción que tenemos que poner sobre el curso"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg ={4}/>
                </Row>
            </Row>

    )
}

function CardReview(props) {
    const {name, subtitle, avatar, review} = props;

    const {Meta} = Card;

    return(
        <Card className = "reviews-courses__card">
            <p>{review}</p>
            <Meta 
                avatar = {<Avatar src = {avatar} />}
                title = {name}
                description = {subtitle}
            />
        </Card>
    )
}
