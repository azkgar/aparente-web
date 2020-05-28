import React, {useState, useEffect} from 'react';
import {Button, notification} from "antd";
import Modal from "../../../components/Modal";
import queryString from "query-string";
import {withRouter} from "react-router-dom";
import {getPostsApi} from "../../../api/post";

import "./Blog.scss";


 function Blog(props) {
    const {location, history} = props;

    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
    const [posts, setPosts] = useState(null);
    const [reloadPosts, setReloadPosts] = useState(false);
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const {page = 1} = queryString.parse(location.search);
    
    useEffect(()=>{
        getPostsApi(12, page).then(response => {
            if(response?.code != 200){
                notification["warning"]({message: response.message});
            } else {
                setPosts(response.posts);
            }
        }).catch(() => {
            notification["error"]({message: "Error del servidor" });
        });

        setReloadPosts(false);
    }, [page, reloadPosts]);

    return (
        <div className = "blog">
            <div className = "blog__add-post">
                <Button type = "primary">
                    Nuevo post
                </Button>
            </div>
            <h1>Post List</h1>
            <h2>Paginación</h2>

            <Modal
                title = {modalTitle}
                isVisible = {isVisibleModal}
                setIsVisible = {setIsVisibleModal}
                width = "75%"
            />
        </div>
    )
}

export default withRouter(Blog);
