import React, {useState, useEffect, useRef}  from 'react';
import { Form, Input, Button, List, Divider} from 'antd';
import { SearchOutlined, FontSizeOutlined } from '@ant-design/icons';
import {getAllPostsApi} from "../../../../api/post";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./SearchBar.scss";

export default function SearchBar() {
    const [isTyping, setIsTyping] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState("");
    const [postTitles, setPostTitles] = useState([]);
    const [posts, setPosts] = useState({});
    const [matchTitles, setMatchTitles] = useState([]);
    const [urls, setUrls] = useState([]);
    const [showPosts, setShowPosts] = useState(false);
    const [word, setWord] = useState("");
    const [notFound, setNotFound] = useState(false);
    const node = useRef();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!search){
            setIsTyping(false);
        } else {
            setIsTyping(true);
        }
    }, [search]);

    useEffect(() => {
        if(isVisible === false){
            setWord(search);
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
        setMatchTitles(matchArray);
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
            setShowPosts(true);
            setOpen(true);

        } else {
            setUrls([]);
            setShowPosts(false);
            setNotFound(true);
            setOpen(true);
        }
        setIsTyping(false);
        setIsVisible(false);
    }

    const handleClick = e => {
        if (node.current.contains(e.target)){
            return;
        }
        setOpen(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    function openNewPost() {
        setOpen(false);
        window.location.reload(false);
    }

    const inputClass = isVisible ? "search-input-display" : "search-input-hidden";
    
    return (
        <div ref = {node}>
        <Form onSubmit = {searchValue}  className = "search-container">
            <Form.Item >
                <Input
                    placeholder = "Escribe la palabra que estás buscando" 
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
        <FoundList urls = {urls} showPosts = {showPosts} matchTitles = {matchTitles} word = {word} setShowPosts = {setShowPosts} notFound = {notFound} open = {open} openNewPost = {openNewPost} />
        </div>
    );
}

function FoundList(props) {
    const {urls, showPosts, matchTitles, word, notFound, open, openNewPost} = props;
    const result = []
    let i;
        for(i=0; i<urls.length; i++){
        result.push({
            title: matchTitles[i],
            url: urls[i]
            });
        }

    if(showPosts){
        return(
            open ?
            <>
            <Divider orientation = "left">Resultados</Divider>
            <List 
                header = {<div>{`Títulos relacionados con ${word}:`}</div>}
                bordered
                dataSource = {result}
                renderItem = {item => (
                    <List.Item onClick = {openNewPost}>
                        <Link to = {`/blog/${item.url}`}> {item.title} </Link>
                    </List.Item>
                )}
            />
            </> : null
        );
    } else {
        return(notFound && open ?
            <>
            <Divider orientation = "left">¡Ups!</Divider>
            <div className = "not-found">
            <p>Lo siento... 😔 Todavía no escribo un post relacionado con {word}.<br/>

            Pero ¡Qué buen tema! Puedes mandarme un mensaje con tu duda o pregunta a:
            <ul>
                <li><FontAwesomeIcon icon={['fab', 'instagram']} className = "instagram"/>    <a href = "https://www.instagram.com/aparentemx/" target = "_blank">Instagram</a></li>
                <li><FontAwesomeIcon icon={['fab', 'facebook-messenger']} className = "facebook"/>    <a href = "http://m.me/AparenteMX" target = "_blank">Facebook</a></li>
                <li><FontAwesomeIcon icon={['fab', 'whatsapp']} className = "whatsapp"/>    <a href = {`https://api.whatsapp.com/send?phone=525612982728&text=¡Azkary!%20Tengo%20una%20duda%20buenísima%20relacionada%20con%20${word}%20que%20no%20encontré%20en%20el%20blog.%20😱`} target = "_blank">WhatsApp</a></li>
                <li><FontAwesomeIcon icon={['far', 'envelope']} className = "email"/>    <a href = {`mailto:agarcia@aparente.mx?subject=Excelente%20tema%20para%20el%20blog.&body=¡Azkary!%20Tengo%20una%20duda%20buenísima%20relacionada%20con%20${word}%20que%20no%20encontré%20en%20el%20blog.%20😱`} target ="_top">email</a></li>
            </ul>
            O puedes seguir mejorando tu imagen leyendo los posts disponibles en el blog 😉</p>
            </div> </> : null
        );
    }
}
