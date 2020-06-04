import React, {useState, useEffect} from 'react';
import {Spin, Tag, notification} from "antd";
import moment from "moment";
import {Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";
import {getPostApi} from "../../../../api/post";
import "moment/locale/es";

import "./PostInfo.scss";

export default function PostInfo(props) {
    const {url} = props;
    const [postInfo, setPostInfo] = useState(null);
    const [urlExists, setUrlExists] = useState(null);

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
            <title>B_ | {postInfo.title}</title>
            <meta name = "description" content =  {postInfo.title}/>
        </Helmet>
        <div className = "post-info">
            <h1 className = "post-info__title">{postInfo.title}</h1>
            <div className = "post-info__creation-date">
                {moment(postInfo.date).local("es").format("LL")}
            </div>
            <div className = "post-info__tags">
                {postInfo.categories.map(tag => {
                    if(tag){
                        return(
                            <Tag color = "#0059ca">{tag}</Tag>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className = "post-info__description" dangerouslySetInnerHTML = {{__html: postInfo.content}}>

            </div>
        </div>
        </>
    )
}
