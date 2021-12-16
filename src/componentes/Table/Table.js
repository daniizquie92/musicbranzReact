import React from "react";
import THead from "../THead";
import './Table.css';
import TBodyMix from "../TBodyMix";

function Table(props)
{
    return(
        <div className="container">
            <table>
                <THead columnas={props.columnas}></THead>
                <TBodyMix filas={props.filas} evento={props.evento} entidad={props.entidad}></TBodyMix>

            </table>
        </div>
    );
}

export default Table;