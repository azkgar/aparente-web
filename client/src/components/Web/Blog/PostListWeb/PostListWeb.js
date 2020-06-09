import React, {useState, useEffect} from 'react';
import {Spin, Card, notification} from "antd";
import {Link} from "react-router-dom";
import moment from "moment";
import queryString from "query-string";
import {Helmet} from "react-helmet";
import Pagination from "../../../Pagination";
import {getPostsApi} from "../../../../api/post";
import "moment/locale/es";


import "./PostListWeb.scss";

export default function PostListWeb(props) {
    const {location, history} =props;
    const [posts, setPosts] = useState(null);
    const {page = 1} = queryString.parse(location.search);

    useEffect(() => {
        getPostsApi(12, page).then(response => {
            if(response?.code !== 200){
                notification["warning"]({message: response.message});
            } else {
                setPosts(response.posts);
            }
        }).catch(() => {
            notification["error"]({
                message: "Error del servidor"
            })
        });
    }, [page]); 

    if(!posts) {
        return (
            <Spin tip = "Cargando" style = {{width: "100%", padding: "200px 0"}} />
        )
    }
    

    return (
        <>
        <Helmet>
            <title>
                Aparente | Blog con estilo
            </title>
            <meta name = "description" content =  "Página principal del Blog con estilo de Aparente. Un blog donde puedes encontrar consejos para mejorar la imagen y presencia de tu marca, producto o empresa y tu imagen personal" />
        </Helmet>
        <div className = "posts-list-web">
            <h1>Publicaciones<span>_</span></h1>
            <PostCard posts = {posts.docs}/>
            <Pagination posts = {posts} location = {location} history = {history} />
        </div>
        </>
    )
}

function PostCard(props) {
    const {posts} = props;
    const {Meta} = Card;

     return(
         <div className = "container-posts">
             {posts.map(post => {
                const day = moment(post.date).format("DD");
                const month = moment(post.date).format("MMMM");
                const year = moment(post.date).format("YYYY");
             return (
                 
                <Link to = {`/blog/${post.url}`} key = {post._id}>
                    <Card
                        key = {post._id}
                        hoverable
                        style = {{widht: 240}}
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