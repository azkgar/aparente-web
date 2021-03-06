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

    function removeClass() {
        const element = document.getElementById("navbarNav");
        element.classList.remove("show");
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style = {black}>
            <Link to = {"/"} className = "navbar-brand">
                <img src = {logo} alt = "Aparente" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {menuData.map(item => {
                        const external = item.url.indexOf("http") > -1 ? true: false;

                        if(external) {
                            return (
                                <li key = {item._id} className = "nav-item">
                                    <a className="nav-link list-item" href={item.url} target = "_blank" rel = "noopener noreferrer">{item.title}</a>
                                </li>
                            );
                        }

                        return (
                            <li key = {item._id} className = "nav-item">
                                <Link to = {item.url} className = "nav-link" onClick = {removeClass}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
             </div>
        </nav>
    );
}