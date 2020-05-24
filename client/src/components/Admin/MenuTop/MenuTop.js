import React from "react";
import {Button} from "antd"
import{MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined} from "@ant-design/icons"
import AparenteLogo from "../../../assets/img/jpg/APARENTE_logo_negro.jpg"

import "./MenuTop.scss";

export default function MenuTop(props) {
    const {menuCollapsed, setMenuCollapsed} = props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo"
                    src={AparenteLogo}
                    alt="Aparente"
                />
                <Button type="Link" onClick={()=>setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="Link">
                <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}