import React, {useState, useEffect} from 'react';
import {Row, Col, Form, Input, Button, DatePicker, notification} from "antd";
import {FontSizeOutlined, LinkOutlined} from "@ant-design/icons";
import moment from "moment";
import {Editor} from "@tinymce/tinymce-react";
import { getAccessTokenApi } from '../../../../api/auth';

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
    
    return (
        <div className = "add-edit-post-form">
            <AddEditForm postData = {postData}  post = {post}/>
        </div>
    );
}

function AddEditForm(props) {
    const {postData, post} = props;

    return(
       <Form
        className = "add-edit-post-form"
        layout = "inline"
        
       >
            <Row>
                <Col span = {8}>
                    <Input
                        prefix = {<FontSizeOutlined />}
                        placeholder = "Título"
                        //value = {}
                        //onChange = {}

                     />
                </Col>
                <Col span = {8}>
                    <Input
                        prefix = {<LinkOutlined />}
                        placeholder = "url"
                        //value = {}
                        //onChange = {}

                     />
                </Col>
                <Col span = {8}>
                    <DatePicker 
                        style ={{width: "100%"}}
                        format = "DD/MM/YYYY HH:mm:ss"
                        placeholder = "Fecha de publicación"
                        showTime = {{defaultValue: moment("00:00:00", "HH:mm:ss")}}
                        //value = {}
                        //onChange = {}
                    />
                </Col>
            </Row>
            <Editor
                apiKey= {process.env.REACT_APP_TINYMCE_API_KEY}
                initialValue=""
                init={{
                selector: "textarea",
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    "textcolor fullscreen preview emoticons"
                ],
                toolbar:
                   'undo redo | formatselect | bold italic underline strikethrough  blockquote subscript superscript code backcolor | \
                   alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help | image editimage imageoptions | forecolor backcolor | fullscreen | preview | emoticons',
                textcolor_rows: "4"
                }}
                //onEditorChange={this.handleEditorChange}
            />
        
            <Button type = "primary" htmlType = "submit" className = "btn-submit">
                {post ? "Actualizar" : "Publicar" }
            </Button>
       </Form>
    );
}