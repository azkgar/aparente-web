import React, {useState, useEffect} from "react";

export default function MenuWebList(props) {
    const {menu, setRealoadMenuWeb} = props;

    return(
        <div>
            <h1>MenuWebList</h1>
            {menu.map(item => (
               <p key = {item._id}>{item.title}</p> 
            ))}
        </div>
    );
}