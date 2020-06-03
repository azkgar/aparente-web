import React, {useState, useEffect}  from 'react';
import { Form, Row, Col, Input, Button} from 'antd';
import { SearchOutlined, FontSizeOutlined } from '@ant-design/icons';
import {getAllPostsApi} from "../../../../api/post";

import "./SearchBar.scss";

export default function SearchBar() {
    const [isTyping, setIsTyping] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState("");
    const [postTitles, setPostTitles] = useState([]);

    useEffect(() => {
        if(!search){
            setIsTyping(false);
        } else {
            setIsTyping(true);
        }
    }, [search]);

    useEffect(() => {
        if(isVisible === false){
            setSearch("");
        }
    }, [isVisible]);

    useEffect(() => {
        getAllPostsApi().then(response => {
            const titlesArray = [];
            response.posts.docs.map( post => (
                titlesArray.push(post.title)
                
            ));
            console.log(titlesArray);
            console.log(response.posts);
            
            
            setPostTitles(titlesArray);
        });
        console.log(postTitles);
    }, []);

    function visible() {
        setIsVisible(!isVisible);
    }

    function searchValue(e){
        e.preventDefault();
        window.alert(`Buscando... ${search}`)
        setIsTyping(false);
        setIsVisible(false);
    }

    const inputClass = isVisible ? "search-input-display" : "search-input-hidden";
    
    return (
        
        <Row gutter = {24} className = "search-container">
        <Col md = {4} sm = {0} />
        <Col md = {16} sm = {24}>
        <Form onSubmit = {searchValue} >
            <Form.Item >
                <Input 
                    placeholder = "Buscar" 
                    type = "text"
                    name = "searchTerm" 
                    prefix = {<FontSizeOutlined style= {{color: "rgba(0,0,0,0.25)"}}/>} 
                    className = {inputClass} 
                    value = {search}
                    onChange = {e => setSearch(e.target.value)} 
                />
                <Button shape = "circle" icon = {<SearchOutlined/>} htmlType = "submit" className = "search-button" onClick = {isTyping && isVisible ? searchValue : visible} /> 
            </Form.Item>
        </Form>
        </Col>
        <Col md = {4} sm = {0} />
        </Row>
    )
}
