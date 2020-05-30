import React, {useState, useEffect} from 'react';
import {Row, Col, Form, Input, Button, DatePicker, notification} from "antd";
import {FontSizeOutlined, LinkOutlined, UserOutlined, TagOutlined} from "@ant-design/icons";
import moment from "moment";
import {Editor} from "@tinymce/tinymce-react";
import { getAccessTokenApi } from '../../../../api/auth';
import {addPostApi, updatePostApi} from "../../../../api/post";

import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, post} = props;
    const [postData, setPostData] = useState ({});

    useEffect(()=>{
        if(post){
            setPostData(post);
        } else {
            setPostData({});
        }
    }, [post]);

    const processPost = e => {
        e.preventDefault();
        const {title, url, description, date, category, user} = postData;

        if(!title || !url || !description || !date || !user || !category){
            notification["error"]({
                message: "Todos los campos son obligatorios"
            });
        } else {
            if(!post){
                addPost();
                
            } else {
                updatePost();
            }
        } 
    }

    const addPost = ( )=> {
        const token = getAccessTokenApi();
        addPostApi(token, postData).then(response => {
            const typeNotification = response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
                message: response.message
            });
            setIsVisibleModal(false);
            setReloadPosts(true);
            setPostData({});
        }).catch(() => {
            notification["error"]({
                message: "Error del servidor"
            });
        });
    }

    const updatePost = () => {
        const token = getAccessTokenApi();
        updatePostApi(token, post._id, postData)
        .then(response => {
            const typeNotification = response.code === 200 ? "success" : "warning";
            notification[typeNotification]({message: response.message});
            setIsVisibleModal(false);
            setReloadPosts(true);
            setPostData({});
        }).catch(() => {
            notification["error"]({message: "Error del servidor"});
        }); 
    }
    
    return (
        <div className = "add-edit-post-form">
            <AddEditForm postData = {postData} setPostData = {setPostData} post = {post} processPost = {processPost}/>
        </div>
    );
}

function AddEditForm(props) {
    const {postData, setPostData, post, processPost } = props;

    return(
       <Form
        className = "add-edit-post-form"
        layout = "inline"
        onSubmit = {processPost}
        
       >
            <Row>
                <Col span = {8}>
                    <Input
                        prefix = {<FontSizeOutlined />}
                        placeholder = "Título"
                        value = {postData.title}
                        onChange = {e => setPostData({...postData, title: e.target.value})}

                     />
                </Col>
                <Col span = {8}>
                    <Input
                        prefix = {<LinkOutlined />}
                        placeholder = "url"
                        value = {postData.url}
                        onChange = {e => setPostData({...postData, url: transformTextToUrl(e.target.value)})}

                     />
                </Col>
                <Col span = {8}>
                    <DatePicker 
                        style ={{width: "100%"}}
                        format = "DD/MM/YYYY HH:mm:ss"
                        placeholder = "Fecha de publicación"
                        showTime = {{defaultValue: moment("00:00:00", "HH:mm:ss")}}
                        value = {postData.date && moment(postData.date)}
                        onChange = {(e, value) => setPostData({...postData, date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()})}
                    />
                </Col>
            </Row>
            <Row>
                <Col span = {12}>
                    <Input
                        prefix = {<UserOutlined />}
                        placeholder = "Usuario"
                        value = {postData.user}
                        onChange = {e => setPostData({...postData, user: e.target.value})}
                     />
                </Col>
                <Col span = {12}>
                    <Input
                        prefix = {<TagOutlined />}
                        placeholder = "Categoría"
                        value = {postData.category}
                        onChange = {e => setPostData({...postData, category: transformTextToUrl(e.target.value)})}

                     />
                </Col>
            </Row>
            <Editor
                apiKey= {process.env.REACT_APP_TINYMCE_API_KEY}
                initialValue={postData.description ? postData.description : ""}
                init={{
                selector: "textarea",
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    "fullscreen preview emoticons"
                ],
                toolbar:
                   'undo redo | formatselect | bold italic underline strikethrough  blockquote subscript superscript code backcolor | alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | removeformat | help | image editimage imageoptions | forecolor backcolor | fullscreen | preview | emoticons',
                textcolor_rows: "4"
                }}
                onBlur={e => setPostData({...postData, description: e.target.getContent()})}
            />
        
            <Button type = "primary" htmlType = "submit" className = "btn-submit" onClick = {processPost}>
                {post ? "Actualizar" : "Publicar" }
            </Button>
       </Form>
    );
}

function transformTextToUrl(text) {
    const url = text.replace(" ", "-");
    return url.toLowerCase();
}