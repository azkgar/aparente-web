import React, {useState, useEffect, useCallback} from "react";
import {Avatar, Form, Input, Button, notification} from "antd";
import{TagOutlined} from "@ant-design/icons";
import {useDropzone} from "react-dropzone";
import noCover from "../../../../assets/img/png/Missing.png";
import {updateCategoryApi, getCoverApi, uploadCoverApi} from "../../../../api/category";
import {getAccessTokenApi} from "../../../../api/auth";

import "./EditCategoryForm.scss";

export default function EditCategoryForm(props) {
    const {setIsVisibleModal, setReloadCategories, categories} = props;
    const [categoriesData, setCategoriesData] = useState({});
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        setCategoriesData(categories);
    }, [categories]);

    useEffect(() => {
        if(categories.avatar){
            getCoverApi(categories.avatar).then(response => {
                setAvatar(response);
            });
        } else {
            setAvatar(null);
        }
    }, [categories]);

    useEffect(() => {
        if(avatar) {
            setCategoriesData({...categoriesData, avatar: avatar.file});
        }
    }, [avatar]);

    const editCategory = event => {
        event.preventDefault();
        if(!categoriesData.tag) {
            notification["error"]({message: "Todos los campos son obligatorios"});
        } else { 
            const accessToken = getAccessTokenApi();

            if(typeof categoriesData.avatar === "object"){
                uploadCoverApi(accessToken, categoriesData.avatar, categoriesData._id).then(response => {
                    categoriesData.avatar = response.avatarName;
                    updateCategoryApi(accessToken, categoriesData._id, categoriesData).then(response => {
                        notification["success"]({message: response});
                        setIsVisibleModal(false);
                        setReloadCategories(true);
                    }).catch(() => {
                        notification["error"]({message: "Error del servidor"});
                    });
                });
            } else {
                updateCategoryApi(accessToken, categoriesData._id, categoriesData).then(response => {
                    notification["success"]({message: response});
                    setIsVisibleModal(false);
                    setReloadCategories(true);
                }).catch(() => {
                    notification["error"]({message: "Error del servidor"});
                });
            }
        }
    }
            
    return(
        <div className = "edit-categories-form">
            <UploadCover avatar = {avatar} setAvatar = {setAvatar} />
            <EditForm
            categoriesData = {categoriesData} setCategoriesData = {setCategoriesData} editCategory = {editCategory} />
        </div>
    );
}

function UploadCover(props) {
    const {avatar, setAvatar} = props
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        if(avatar) {
            if(avatar.preview) {
                setAvatarUrl(avatar.preview);
            } else {
                setAvatarUrl(avatar);
            }
        } else {
            setAvatarUrl(null);
        }
    }, [avatar]);

    const onDrop = useCallback (
        acceptedFiles => {
            const file = acceptedFiles[0];
            setAvatar({file, preview: URL.createObjectURL(file)});
        }, [setAvatar]
    );

    const{getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: "image/jpg, image/png, image/jpeg",
        noKeyboard: true,
        onDrop
    });

    return(
        <div className = "upload-avatar" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <Avatar size={window.screen.width > 425 ? 240 : 120} shape = "square"  src = {noCover} />
             ) : ( <Avatar size={window.screen.width > 425 ? 240 : 120} shape = "square" src = {avatarUrl ? avatarUrl : noCover} />)}
        </div>
    );
}

function EditForm(props) {
    const {categoriesData, setCategoriesData, editCategory} = props;

    return(
        <Form className = "form-edit" onSubmit = {editCategory}>
            <Form.Item>
                <Input 
                    prefix = {<TagOutlined />}
                    placeholder = "Categoría"
                    value = {categoriesData.tag}
                    onChange = {e => setCategoriesData({...categoriesData, tag: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Button type = "primary" htmlType = "submit" className = "btn-submit" onClick = {editCategory}>
                    Actualizar categoría
                </Button>
            </Form.Item>
        </Form>
    );
}
