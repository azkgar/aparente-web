import React, {useState, useEffect} from 'react';
import {Spin, Tag, notification, BackTop, Anchor, Button} from "antd";
import {ArrowUpOutlined, BookOutlined} from "@ant-design/icons";
import moment from "moment";
import {Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";
import {getPostApi} from "../../../../api/post";
import {getCategoryTagApi} from "../../../../api/category";
import "moment/locale/es";
import {EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, PinterestShareButton, PinterestIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from "react-share";
import CommentBox from "../CommentBox";
import {Link} from "react-router-dom";
import ReactGa from "react-ga";

import "./PostInfo.scss";

export default function PostInfo(props) {
    useEffect(() => {
        ReactGa.initialize("UA-170320020-1");
    
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
      
    const {url} = props;
    const [postInfo, setPostInfo] = useState(null);
    const [categoryInfo, setCategoryInfo] = useState({});
    const [urlExists, setUrlExists] = useState(null);
    const socialUrl = "aparente.mx/blog/";
    const style = {
        height: 50,
        width: 50,
        lineHeight: "50px",
        borderRadius: 4,
        backgroundColor: "#0059ca",
        color: "#fff",
        textAlign: "center",
        fontSize: 14
    };

    useEffect(() => {
        getPostApi(url).then(response => {
            if(response.code === 404){
                setUrlExists(false);
            }
            else if(response.code !== 200) {
                notification["warning"]({message: response.code});
            } else {
                setPostInfo(response.post);
            }
        }).catch(() => {
            notification["error"]({message: "Error del servidor"});
        });
    }, [url]);

    if(urlExists === false){
        return <Redirect to  = "/not-found" />
    } else if (!postInfo){
        return <Spin tip = "Cargando" style = {{width: "100%", padding: "200px 0"}} />
    }

    return (
        <>
        <Helmet>
            <title>Blog_ | {postInfo.title}</title>
            <meta name = "description" content =  {postInfo.description}/>
        </Helmet>
        <div className = "post-info">
            <Anchor>
                <Button href = "/blog" >Más posts</Button>
            </Anchor>
            <h1 className = "post-info__title">{postInfo.title}</h1>
            <div className = "post-info__creation-date">
                {moment(postInfo.date).local("es").format("LL")}
            </div>
            <div className = "post-info__tags">
                {postInfo.categories.map(tag => {
                    
                    if(tag){
                        getCategoryTagApi(tag).then(response => {
                            setCategoryInfo(response.category[0]);
                        });
                        return(
                            <Link to = {`/categorias/${categoryInfo.url}`} key = {tag}>
                                <Tag color = "#0059ca">{tag}</Tag>
                            </Link>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className = "post-info__description" dangerouslySetInnerHTML = {{__html: postInfo.content}}>
                
            </div>
            <div className = "social-share">
                <h3>¡Comparte con tus amigos!</h3>
                <EmailShareButton url = {`${socialUrl}${url}`} subject ={postInfo.title} body = {`Te recomiendo leer ${postInfo.title} de Aparente en: `} ><EmailIcon/></EmailShareButton>
                <FacebookShareButton url = {`${socialUrl}${url}`} quote = {`Mira el post ${postInfo.title} de Aparente`} hashtag = "#NoMasEntes"><FacebookIcon /></FacebookShareButton>
                <PinterestShareButton url = {`${socialUrl}${url}`} media = {postInfo.pinterest} description = {`${postInfo.title} de Aparente`}><PinterestIcon /></PinterestShareButton>
                <TwitterShareButton url = {`${socialUrl}${url}`} title = {`Mira el post ${postInfo.title} de Aparente`} hashtags = {["NoMasEntes", "SinAparienciaSomosEntes"]}><TwitterIcon/></TwitterShareButton>
                <WhatsappShareButton url = {`${socialUrl}${url}`} title = {`Mira el post ${postInfo.title} de Aparente`}><WhatsappIcon/></WhatsappShareButton>
            </div>
            <CommentBox id = {postInfo._id}/>
            <BackTop>
                <div style = {style}><ArrowUpOutlined style = {{fontSize: 28}}/></div>
            </BackTop>
        </div>
        </>
    )
}
