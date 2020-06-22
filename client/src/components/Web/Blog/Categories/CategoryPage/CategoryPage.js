import React, {useState, useEffect} from 'react';
import { getCategoryApi} from "../../../../../api/category";
import {getRelatedPostsApi} from "../../../../../api/post";
import {Card, Divider, Spin} from "antd";
import {Link} from "react-router-dom";
import moment from "moment";
import {Helmet} from "react-helmet";

import "./CategoryPage.scss";

export default function CategoryPage(props) {
    const {tag} = props;
    const [object, setObject] = useState("");
    const [postsRelated, setPostsRelated] = useState({});

    useEffect(() => {
        if(object){
            getRelatedPostsApi(object.tag).then(response => {
                setPostsRelated(response.posts.reverse());
            });
        } else {
            setPostsRelated({});
        }
        
    }, [object]);

    useEffect(() => {
        getCategoryApi(tag).then(response => {
            setObject(response.category[0]);  
        })
    }, []);
    
   if(!postsRelated.length){
    return (
        <Spin tip = "Cargando" style = {{width: "100%", padding: "200px 0"}} />
    )
   }

    return (
        <div className = "main-container">
            <div className = "category-header">
                <img alt = {object.tag} src = {object.avatar ? require(`../../../../../../../server/uploads/categories/${object.avatar}`) : require("../../../../../assets/img/png/Missing.png") } />
            </div> 
            <Divider orientation = "left">Publicaciones: </Divider>
            <MatchList postsRelated = {postsRelated} object = {object} /> 
        </div>
    )
}

function MatchList(props) {
    const {postsRelated, object} = props;
    const {Meta} = Card;

        return(
            
            <>
            <Helmet>
            <title>Aparente | {`${object.tag}`}</title>
            <meta name = "description" content = {`Página principal de todas las publicaciones del Blog con estilo de Aparente relacionadas con el tema ${object.tag}`}/>
            </Helmet>
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
         </>
        );
}


