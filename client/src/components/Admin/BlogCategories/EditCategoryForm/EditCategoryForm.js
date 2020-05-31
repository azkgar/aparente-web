import React, {useState, useEffect} from "react";
import {Form, Input, Button, notification} from "antd";
import{TagOutlined} from "@ant-design/icons";
import {updateCategoryApi} from "../../../../api/category";
import {getAccessTokenApi} from "../../../../api/auth";

import "./EditCategoryForm.scss";

export default function EditCategoryForm(props) {
    const {setIsVisibleModal, setReloadCategories, categories} = props;
    const [categoriesData, setCategoriesData] = useState({});

    useEffect(() => {
        setCategoriesData(categories);
    }, [categories]);

    const editCategory = event => {
        event.preventDefault();
        if(!categoriesData.tag) {
            notification["error"]({message: "Todos los campos son obligatorios"});
        } else {
            const accessToken = getAccessTokenApi();
            updateCategoryApi(accessToken, categoriesData._id, categoriesData).then(response => {
                notification["success"]({message: response});
                setIsVisibleModal(false);
                setReloadCategories(true);
            })
                .catch(() => {
                    notification["error"]({message: "Error del servidor"});
                });
        }
    }
  

    return(
        <div className = "edit-categories-form">
            <EditForm
            categoriesData = {categoriesData} setCategoriesData = {setCategoriesData} editCategory = {editCategory} />
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
