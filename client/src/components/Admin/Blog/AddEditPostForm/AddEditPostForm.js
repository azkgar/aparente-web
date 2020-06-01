import React, {useState, useEffect} from 'react';
import {Row, Col, Form, Input, Button, DatePicker, Select, notification} from "antd";
import {FontSizeOutlined, LinkOutlined, UserOutlined, TagOutlined} from "@ant-design/icons";
import moment from "moment";
import {Editor} from "@tinymce/tinymce-react";
import { getAccessTokenApi } from '../../../../api/auth';
import {addPostApi, updatePostApi} from "../../../../api/post";
import {getUsersActiveApi} from "../../../../api/user";
import {getCategoriesApi} from "../../../../api/category";

import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, post} = props;
    const [postData, setPostData] = useState ({});
    const [userData, setUserData] = useState([]);
    const [categories, setCategories] = useState([]);
    const token = getAccessTokenApi();

    useEffect(()=>{
        if(post){
            setPostData(post);
        } else {
            setPostData({});
        }
    }, [post]);

    useEffect(() => {
        getUsersActiveApi(token, true).then(response => {
            setUserData(response.users);
        });
    }, [token]);

    useEffect( () => {
        getCategoriesApi().then(response => {
            const arrayCategories = [];
            response.category.forEach(item => {
                if(item.active){
                    arrayCategories.push(item);
                }
                //item.active && arrayMenu.push(item);
            });
            setCategories(arrayCategories);
        });
    }, []);

    const processPost = e => {
        e.preventDefault();
        const {title, url, content, date, categories, username} = postData;

        if(!title || !url || !content || !date || !username || !categories){
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

    const addPost = () => {
    
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
            <AddEditForm postData = {postData} setPostData = {setPostData} post = {post} processPost = {processPost} userData = {userData} categories = {categories} />
        </div>
    );
}

function AddEditForm(props) {
    const {postData, setPostData, post, processPost, userData, categories} = props;

    return(
       <Form
        className = "add-edit-post-form"
        onSubmit = {processPost}
        
       >
            <Row>
                <Col span = {8}>
                    <Form.Item>
                    <Input
                        prefix = {<FontSizeOutlined />}
                        placeholder = "Título"
                        value = {postData.title}
                        onChange = {e => setPostData({...postData, title: e.target.value})}

                     />
                     </Form.Item>
                </Col>
                <Col span = {8}>
                    <Form.Item>
                    <Input
                        prefix = {<LinkOutlined />}
                        placeholder = "url"
                        value = {postData.url}
                        onChange = {e => setPostData({...postData, url: transformTextToUrl(e.target.value)})}

                     />
                     </Form.Item>
                </Col>
                <Col span = {8}>
                    <Form.Item>
                    <DatePicker 
                        style ={{width: "100%"}}
                        format = "DD/MM/YYYY HH:mm:ss"
                        placeholder = "Fecha de publicación"
                        showTime = {{defaultValue: moment("00:00:00", "HH:mm:ss")}}
                        value = {postData.date && moment(postData.date)}
                        onChange = {(e, value) => setPostData({...postData, date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()})}
                    />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span = {12}>
                <Form.Item>
                    <Input
                        prefix = {<UserOutlined />}
                        placeholder = "Usuario"
                        value = {postData.username}
                        onChange = {e => setPostData({...postData, username: e.target.value})}
                     />
                     </Form.Item>
                </Col>
                <Col span = {12}>
                    <Form.Item>
                    <Input
                        prefix = {<TagOutlined />}
                        placeholder = "Categoría"
                        value = {postData.categories}
                        onChange = {e => setPostData({...postData, categories: transformTextToUrl(e.target.value)})}

                     />
                     </Form.Item>
                </Col>
            </Row>
            <Row>
            <Form.Item>
            <Editor
                apiKey= {process.env.REACT_APP_TINYMCE_API_KEY}
                value={postData.content ? postData.content : ""}
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
                onBlur={e => setPostData({...postData, content: e.target.getContent()})}
            />
            </Form.Item>
            </Row>
            <Row gutter = {24}>
                <Col span = {12}>
                    <UserList userData = {userData} setPostData = {setPostData} postData = {postData}/>
                </Col>
                <Col span = {12}>
                    <CategoriesList categories = {categories} setPostData = {setPostData} postData = {postData} />
                </Col>
            </Row>
        
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

function UserList(props) {
    const {Option} = Select;
    const {userData, postData, setPostData} = props;

    return(
    <Form.Item>
        <Select placeholder = "Autor" onChange = {e => setPostData({...postData, username: e})} value = {userData.name}>
                    {userData.map( user => <Option key = {user._id} value = {user.name}>{user.name}</Option>)}
        </Select>
    </Form.Item>
    );
}

function CategoriesList(props) {
    const {categories, postData, setPostData} = props;
    const {Option} = Select
    //const [postCategories, setPostCategories] = useState([]);
    //const [filteredOptions, setFilteredOptions] = useState([]);
    const categoryList = [];
    categories.map( category => (
        categoryList.push(category.tag)
    ));

    const postCategories = postData.categories;

    //console.log(postData);

    //useEffect(() => {
    //    if(!postData) {
    //        setPostCategories([]);
    //        setFilteredOptions(categoryList.filter(o => !postCategories.includes(o)));
    //        console.log(postCategories);
    //        console.log(filteredOptions);
    //        
    //        
    //    } else {
    //        setPostCategories(postData.categories);
    //        setFilteredOptions(categoryList.filter(o => !postCategories.includes(o)));
    //        console.log(postCategories);
    //        console.log(filteredOptions);
    //    }
    //},[postData]);

    const filteredOptions = categoryList.filter(o => !postCategories.includes(o));
           
        
        return(
            <Select
                mode="multiple"
                placeholder="Selecciona la(s) categoría(s)"
                value={postCategories}
                onChange={e => setPostData({...postData, categories: e})}
                style={{ width: '100%' }}
            >
                {filteredOptions.map(item => (
                    <Option key={item} value={item}>
                        {item}
                    </Option>
                ))}
            </Select>
        ); 
}