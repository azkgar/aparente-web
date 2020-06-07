import React, {useState, useEffect} from 'react';
import {getCategoriesApi} from "../../../../../api/category";
import {getAllPostsApi} from "../../../../../api/post";
import {notification} from "antd";

import "./CategoryPage.scss";

export default function CategoryPage(props) {
    const {tag} = props;
    const [category, setCategory] = useState("");
    const [categoryNotExist, setCategoryNotExist] = useState(false);
    const [cover, setCover] = useState ("");
    const [posts, setPosts] = useState({});
    const [categoriesList, setCategoriesList] = useState({});
    const [postsRelated, setPostsRelated] = useState({});

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
                }
            });
        })
    }, [tag]);

    useEffect(() => {
        if(category) { 
            setCategoryNotExist(false);
        } else {
            setCategoryNotExist(true);
        }
    }, [category]);

    function findPosts() {
        const matchPosts = [];
        posts.map(post => {
            post.categories.map(postCategory => {
                const match = postCategory.toLowerCase().indexOf(category.toLowerCase()) > -1 ? true : false;
                if(match) {
                    matchPosts.push({
                        title: post.title,
                        url: post.url
                    });
                }
            });
        })
        setPostsRelated(matchPosts);
        console.log(matchPosts);
    }

    useEffect(() => {
        if(posts.length){
            findPosts();
        }
    },[category]);
    
    return (
        <div>
            <h1>Página de URL</h1>
        </div>
    )
}
