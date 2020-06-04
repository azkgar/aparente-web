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
    const [matchTitles, setMatchTitles] = useState([]);
    const [posts, setPosts] = useState({});
    const [urls, setUrls] = useState([]);

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
            setPosts(response.posts);
            response.posts.map( post => (
                titlesArray.push(post.title.toLowerCase())
            ));

            setPostTitles(titlesArray);
        });
    }, []);

    function visible() {
        setIsVisible(!isVisible);
    }

    function searchValue(e){
        e.preventDefault();
        const matchArray = [];
        postTitles.map(title => {
            const match = title.indexOf(search.toLowerCase()) > -1 ? true : false;
            if(match) {
                matchArray.push(title);
            }
        });

        if(matchArray.length){
            const urlArray = [];
            posts.map( post => {
                matchArray.map( single => {
                    const lower = post.title.toLowerCase();
                    const match = lower.indexOf(single) > -1 ? true : false;
                    if(match){
                        urlArray.push(post.url);
                    }
                });
            });
            setUrls(urlArray);
            console.log(urlArray);
            
            
        } else {
            console.log("No hay coincidencias");
            setUrls([]);
            
        }
        
        
        setIsTyping(false);
        setIsVisible(false);
        setMatchTitles(matchArray);

        
        console.log(matchArray);
    }

    const inputClass = isVisible ? "search-input-display" : "search-input-hidden";
    console.log(matchTitles);
    console.log(urls);
    
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
