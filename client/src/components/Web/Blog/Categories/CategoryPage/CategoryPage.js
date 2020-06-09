import React, {useState, useEffect} from 'react';
import {getCategoriesApi} from "../../../../../api/category";
import {getAllPostsApi} from "../../../../../api/post";
import {Card, Divider, List, Spin} from "antd";
import {Link} from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./CategoryPage.scss";

export default function CategoryPage(props) {
    const {tag} = props;
    const [category, setCategory] = useState("");
    const [categoryNotExist, setCategoryNotExist] = useState(true);
    const [cover, setCover] = useState ("");
    const [posts, setPosts] = useState({});
    const [categoriesList, setCategoriesList] = useState({});
    const [postsRelated, setPostsRelated] = useState({});
    const [completeList, setCompleteList] = useState(false);

    useEffect(() => {
        getAllPostsApi().then(response => {
            setPosts(response.posts);
        });
    }, []);

    useEffect(() => {
        getCategoriesApi().then(response => {
            setCategoriesList(response.category);
            response.category.map(category => {
                const match = category.tag.toLowerCase().indexOf(tag.toLowerCase()) > -1 ? true : false;
                if(match){
                    setCategory(category.tag);
                    setCover(category.avatar);
                    setCategoryNotExist(false);
                }
            });
        })
    }, [tag]);

    useEffect(() => {
        if(posts.length){
            findPosts();
        }
    }, [!categoryNotExist]);

    function findPosts() {
        const matchPosts = [];
        posts.map(post => {
            post.categories.map(postCategory => {
                const match = postCategory.toLowerCase().indexOf(category.toLowerCase()) > -1 ? true : false;
                if(match) {
                    matchPosts.push({
                        title: post.title,
                        url: post.url,
                        cover: post.cover,
                        date: post.date
                    });
                } 
            });
        });
        setPostsRelated(matchPosts);
        setCompleteList(true);
    }
    
   if(!completeList && !categoryNotExist){
    return (
        <Spin tip = "Cargando" style = {{width: "100%", padding: "200px 0"}} />
    )
   }

    return (
        <div className = "main-container">
        { categoryNotExist ? <div className = "main-container"> <MatchList categoryNotExist = {categoryNotExist} postsRelated = {postsRelated} categoriesList = {categoriesList} category = {category} completeList = {completeList} /> </div> : <div className = "main-container"> <div className = "category-header">
                <h2>{category}</h2>
                <img alt = {category} src = {cover ? require(`../../../../../../../server/uploads/categories/${cover}`) : require("../../../../../assets/img/png/Missing.png") } />
            </div>
            <Divider orientation = "left">Publicaciones: </Divider>
            <MatchList categoryNotExist = {categoryNotExist} postsRelated = {postsRelated} categoriesList = {categoriesList} category = {category} completeList = {completeList} /> </div> }
        </div>
    )
}

function MatchList(props) {
    const {categoryNotExist, postsRelated, categoriesList, category, completeList} = props;
    const {Meta} = Card;

    if(!postsRelated){
        return(
        
             categoryNotExist && 
            
            <div className = "not-found">
            <p>Lo siento... 😔 Todavía no escribo un post relacionado con {category.toUpperCase()}.<br/>

            Pero ¡Qué buen tema! Puedes mandarme un mensaje con tu duda o pregunta a:
            <ul>
                <li><FontAwesomeIcon icon={['fab', 'instagram']} className = "instagram"/>    <a href = "https://www.instagram.com/aparentemx/" target = "_blank">Instagram</a></li>
                <li><FontAwesomeIcon icon={['fab', 'facebook-messenger']} className = "facebook"/>    <a href = "http://m.me/AparenteMX" target = "_blank">Facebook</a></li>
                <li><FontAwesomeIcon icon={['fab', 'whatsapp']} className = "whatsapp"/>    <a href = {`https://api.whatsapp.com/send?phone=525612982728&text=¡Azkary!%20Tengo%20una%20duda%20buenísima%20relacionada%20con%20${category}%20que%20no%20encontré%20en%20el%20blog.%20😱`} target = "_blank">WhatsApp</a></li>
                <li><FontAwesomeIcon icon={['far', 'envelope']} className = "email"/>    <a href = {`mailto:agarcia@aparente.mx?subject=Excelente%20tema%20para%20el%20blog.&body=¡Azkary!%20Tengo%20una%20duda%20buenísima%20relacionada%20con%20${category}%20que%20no%20encontré%20en%20el%20blog.%20😱`} target ="_top">email</a></li>
            </ul>
            O puedes seguir mejorando tu imagen leyendo los posts disponibles en el blog 😉</p>
            <List
                header = {<div> Categorías del blog</div>}
                bordered
                dataSource = {categoriesList}
                renderItem = {item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
                
            />
            </div>
        );
    } else {
        return(
            completeList &&
            <div className = "container-posts">
             {postsRelated.map(post => {
                const day = moment(post.date).format("DD");
                const month = moment(post.date).format("MMMM");
                const year = moment(post.date).format("YYYY");
             return (
                <Link to = {`/blog/${post.url}`} key = {post.url}>
                    <Card
                        hoverable
                        cover = {<img alt = {post.title} src = {post.cover} />}
                        className = "post-card"
                    >
                        <Meta title = {post.title} description = {`Publicado el ${day} de ${month} de ${year}`} />
                    </Card>
                </Link>
             );
            })}
         </div>
        );
    }
}


