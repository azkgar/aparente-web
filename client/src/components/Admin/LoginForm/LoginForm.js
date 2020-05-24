import React, {useState} from "react";
import {Form, Input, Button, notification} from "antd";
import {UserAddOutlined, LockOutlined} from "@ant-design/icons";
import {signInApi} from "../../../api/user";

import "./LoginForm.scss";

export default function LoginForm() {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        signInApi(inputs);
    }

    return (
        <Form className = "login-form" onChange = {changeForm} onSubmit = {login}>
            <Form.Item>
                <Input 
                    prefix = {<UserAddOutlined style= {{color: "rgba(0,0,0,0.25)"}}/>}
                    type = "email"
                    name = "email"
                    placeholder = "Correo electrónico"
                    className = "login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix = {<LockOutlined style= {{color: "rgba(0,0,0,0.25)"}}/>}
                    type = "password"
                    name = "password"
                    placeholder = "Contraseña"
                    className = "login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType = "submit" className = "login-form__button" >
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    );
}