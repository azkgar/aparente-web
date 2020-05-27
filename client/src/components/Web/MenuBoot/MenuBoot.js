import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/png/APARENTE_logo_blanco_sinfondo.png"
import {getMenuApi} from "../../../api/menu";

import "./MenuBoot.scss";

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

    const black = {style: "rgb(25,25,25"}
    
    return(
        <nav class="navbar navbar-expand-lg navbar-dark" style = {black}>
            <Link to = {"/"} className = "navbar-brand">
                <img src = {logo} alt = "Aparente" />
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    {menuData.map(item => {
                        const external = item.url.indexOf("http") > -1 ? true: false;

                        if(external) {
                            return (
                                <li key = {item._id} class = "nav-item">
                                    <a class="nav-link" href={item.url} target = "_blank" rel = "noopener noreferrer">{item.title}</a>
                                </li>
                            );
                        }

                        return (
                            <li key = {item._id} className = "nav-item">
                                <Link to = {item.url} className = "nav-link">{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
             </div>
        </nav>
    );
}