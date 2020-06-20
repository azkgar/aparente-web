import React, {useState} from 'react';
import {Form, Input, Button, notification} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {suscribeNewsletterApi} from "../../../api/newsletter";

import "./Newsletter.scss";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const resultValidation = emailValid.test(email);

        if (!resultValidation){
            notification["error"]({message: "El email no es válido"});
        } else {
            suscribeNewsletterApi(email).then(response => {
                if(response.code != 200){
                    notification["warning"]({message: response.message});
                } else {
                    notification["success"]({message: response.message});
                }
            });

            setEmail("");
        }
    }

    return (
        <div className = "newsletter">
            <h3>Suscríbete<span>_</span></h3>
            <Form >
                <Form.Item>
                    <Input 
                        prefix = {<UserOutlined/>} 
                        style = {{color: "rgba(0,0,0,0.25)"}}
                        placeholder = "email"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                        />
                </Form.Item>
                <Form.Item>
                    <Button type = "primary" htmlType = "submit" className = "login-form-button" onClick = {onSubmit} >
                        Suscribirme
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
