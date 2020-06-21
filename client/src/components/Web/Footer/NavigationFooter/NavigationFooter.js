import React from 'react';
import {Row, Col} from "antd";
import {HomeOutlined, FormOutlined, UsergroupAddOutlined, PhoneOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


import "./NavigationFooter.scss";

export default function NavigationFooter() {
    return (
        <>
        <Row className = "navigation-footer">
            <Col md = {24} sm ={24} xs ={24}>
                <h3>Navegación</h3>
            </Col>
        </Row>
        <Row className = "navigation-footer">
            <Col md = {24} sm ={24} xs ={24}>
                <RenderList />
            </Col>
        </Row>
        </>
    )
}

function RenderList() {
    return (
        <ul>
            <li>
                <Link to = "/inicio"><HomeOutlined />Inicio</Link>
            </li>
            <li>
                <Link to="/blog"><FormOutlined /> Blog</Link>
            </li>
            <li>
                <Link to="/nosotros"><UsergroupAddOutlined /> Nosotros</Link>
            </li>
            <li>
                <Link to="/contacto"><PhoneOutlined /> Contacto</Link>
            </li>
        </ul>
    )
}