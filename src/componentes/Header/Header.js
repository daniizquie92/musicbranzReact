import React from "react";
import './Header.css';

function Header(props){
    return (
        <header>
            <h1>Bienvenido a {props.ejercicio}, indique una película</h1>
        </header>
    );
}

//Parte obligatoria: exportar
export default Header;
