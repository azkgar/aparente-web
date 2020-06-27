import React, {useState} from 'react';
import {Form, Input, Button,Checkbox, notification} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {suscribeNewsletterApi} from "../../../api/newsletter";

import "./Newsletter.scss";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const resultValidation = emailValid.test(email);

        if(checked) {
            if (!resultValidation){
                notification["error"]({message: "El email no es válido."});
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
        } else {
            notification["error"]({message: "Debes aceptar el aviso de privacidad."});
        }   
    }

    const isChecked = () => {
        setChecked(!checked);
    }
    
    return (
        <div className = "newsletter">
            <h3>Suscríbete</h3>
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
                <Checkbox name="privacyPolicy" onChange = {isChecked}>
                    He leído y acepto el <a href = "/aviso-de-privacidad">aviso de privacidad</a>.
                </Checkbox>
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