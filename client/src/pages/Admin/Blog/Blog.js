import React, {useState, useEffect} from 'react';
import {Button, notification} from "antd";
import Modal from "../../../components/Modal";
import queryString from "query-string";
import {withRouter} from "react-router-dom";
import PostsList from "../../../components/Admin/Blog/PostsList";
import Pagination from "../../../components/Pagination";
import AddEditPostForm from "../../../components/Admin/Blog/AddEditPostForm"
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
    
    console.log(posts);
    
    useEffect(()=>{
        getPostsApi(12, page).then(response => {
            if(response?.code !== 200){
                notification["warning"]({message: response.message});
            } else {
                setPosts(response.posts);
            }
        }).catch(() => {
            notification["error"]({message: "Error del servidor" });
        });
        setReloadPosts(false);
    }, [page, reloadPosts]);

    const addPost = () => {
        setIsVisibleModal(true);
        setModalTitle("Nuevo post");
        setModalContent(<AddEditPostForm setIsVisibleModal = {setIsVisibleModal} setReloadPosts = {setReloadPosts} post = {null}/>);
    }

    if(!posts) {
        return null;
    }

    return (
        <div className = "blog">
            <div className = "blog__add-post">
                <Button type = "primary" onClick = {addPost}>
                    Nuevo post
                </Button>
            </div>
            <h1>El último post</h1>
            <h1>Lista de todos los posts</h1>
             <PostsList posts = {posts} setReloadPosts = {setReloadPosts}/> 
             <Pagination posts = {posts} location = {location} history = {history}/>
            <Modal
                title = {modalTitle}
                isVisible = {isVisibleModal}
                setIsVisible = {setIsVisibleModal}
                width = "75%"
            > 
                {modalContent}
            </Modal>
            
        </div>
    );
}

export default withRouter(Blog);
