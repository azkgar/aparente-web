import React, {useState, useCallback} from "react";
import {Avatar, Form, Input, Select, Button, Row, Col} from "antd";
import{EditOutlined, StopOutlined, DeleteOutlined,CheckOutlined} from "@ant-design/icons"
import {useDropzone} from "react-dropzone";
import noAvatar from "../../../../assets/img/png/no-avatar.png"


import "./EditUserForm.scss";

export default function EditUserForm(props) {
    const {user} = props;
    const [avatar, setAvatar] = useState(null);

    console.log(avatar);

    return(
        <div className = "edit-user-form">
            <UploadAvatar avatar = {avatar} setAvatar = {setAvatar} />
            <h2>{user.email}</h2>
        </div>
    )
}

function UploadAvatar(props) {
    const {avatar, setAvatar} = props
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
                <Avatar size = {150} src = {noAvatar} />
            ) : <Avatar size = {150} src = {avatar ? avatar.preview : noAvatar} />}
        </div>
    );

}