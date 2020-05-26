import React, {useState, useEffect} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/png/APARENTE_logo_blanco_sinfondo.png"
import {getMenuApi} from "../../../api/menu";

import "./MenuTop.scss";

export default function MenuTop(props) {
    const [menuData, setMenuData] = useState([]);

    useEffect( () => {
        getMenuApi().then(response => {
            const arrayMenu = [];
            response.menu.forEach(item => {
                if(item.active){
                    arrayMenu.push(item);
                }
                //item.active && arrayMenu.push(item);
            });
            setMenuData(arrayMenu);
        });
    }, []);
    const rightStyle = {position: 'absolute', top: "15%", right: 0}
    
    return(
        <div>
        <Menu className = "menu-top-web" mode = "horizontal">
            <Menu.Item className = "menu-top-web__logo">
                <Link to = {"/"}>
                    <img src = {logo} alt = "Aparente" />
                </Link>
            </Menu.Item>
        </Menu>
        <Menu className = "menu-top-web" mode = "horizontal" style = {rightStyle}>
            {menuData.map(item => {
                const external = item.url.indexOf("http") > -1 ? true : false;

                if(external) {
                    return (
                        <Menu.Item key = {item._id} className = "menu-top-web__item">
                            <a href = {item.url} target = "_blank" rel = "noopener noreferrer">{item.title}</a>
                        </Menu.Item>
                    )
                }

                return(
                    <Menu.Item key = {item._id} className = "menu-top-web__item">
                        <Link to = {item.url}>{item.title}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
        </div>
    );
}