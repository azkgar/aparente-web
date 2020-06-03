import React, {useState, useEffect}  from 'react';
import { Form, Row, Col, Input, Tooltip, Button} from 'antd';
import { SearchOutlined, FontSizeOutlined } from '@ant-design/icons';

import "./SearchBar.scss";

export default function SearchBar() {
    const [isTyping, setIsTyping] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState("");

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
    console.log(search);
    console.log(isTyping);
    console.log(isVisible);
    
    
    
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