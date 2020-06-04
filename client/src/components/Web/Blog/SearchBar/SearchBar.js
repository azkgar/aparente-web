import React, {useState, useEffect, useRef}  from 'react';
import { Form, Row, Col, Input, Button, List, Divider} from 'antd';
import { SearchOutlined, FontSizeOutlined } from '@ant-design/icons';
import {getAllPostsApi} from "../../../../api/post";
import {Link} from "react-router-dom";

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

    const inputClass = isVisible ? "search-input-display" : "search-input-hidden";
    console.log(open);
    return (
        <div ref = {node}>
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
        <Row>
            <Col md = {4}/>
            <Col md = {16}>
                <FoundList urls = {urls} showPosts = {showPosts} matchTitles = {matchTitles} word = {word} setShowPosts = {setShowPosts} notFound = {notFound} open = {open}/>
            </Col>
            <Col md = {4}/>
        </Row>
        </div>
    );
}

function FoundList(props) {
    const {urls, showPosts, matchTitles, word, notFound, open} = props;
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
                    <List.Item>
                        <Link to = {`/blog/${item.url}`}> {item.title} </Link>
                    </List.Item>
                )}
            />
            </> : null
        );
    } else {
        return(notFound && open ?
            <div className = "not-found">
            <p>Lo sentimos, aún no escribimos posts relacionados a tu búsqueda.<br/>
            Si te urge saber al respecto contáctanos a contacto@aparente.mx o en los siguientes enlaces: <br/>
            Con gusto te resolveremos cualquier duda o inquietud y lo tomaremos en cuenta para nuestros próximos posts</p>
            </div> : null
        );
    }
}
