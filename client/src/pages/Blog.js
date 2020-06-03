import React from 'react';
import {Row, Col} from "antd";
import {useParams} from "react-router-dom";
import PostListWeb from "../components/Web/Blog/PostListWeb";
import PostInfo from "../components/Web/Blog/PostInfo";
import Sider from "../components/Web/Blog/Sider";
import MainBanner from "../components/Web/Blog/MainBanner";
import SearchBar from "../components/Web/Blog/SearchBar";

export default function Blog(props) {
    const {location, history} = props;
    const {url} = useParams();

    return (
        <>
        {!url && <MainBanner />}
        <SearchBar />
        <Row>
            <Col md = {1} sm = {0}/>
            <Col md = {16} sm = {24} >
                {url ? <PostInfo url = {url} /> : <PostListWeb location = {location} history = {history} />}
            </Col>
            <Col md = {1} sm = {0}/>
            <Sider/>
        </Row>
        </>
    )
}
