import React from "react";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
function TBodyMix(props){
    console.log("datos del tbodymix")
    console.log(props.filas)
    const datos = props.filas.map((fila,i) =>{
        if(props.entidad === "artist"){
            return (
                // <TableRow key={i} onClick={() => {props.evento(fila.imdbID)}}>
                //     <TableCell>{fila.Title}</TableCell>
                //     <TableCell>{fila.Year}</TableCell>
                //     <TableCell>{fila.Type}</TableCell>
                //     <TableCell><img src={fila.Poster} alt={fila.imdbID}></img></TableCell>
                // </TableRow>
                <TableRow key={i}>
                    <TableCell>{fila.name}</TableCell>
                    <TableCell>{fila.disambiguation}</TableCell>
                </TableRow>
            );
        }
        else{
            return (
                <TableRow key={i}>
                    <TableCell>{fila.title}</TableCell>
                    <TableCell>{fila['artist-credit'][0].name}</TableCell>
                    <TableCell>{fila['primary-type']}</TableCell>
                </TableRow>
            );
        }
    });

    return(
        <TableBody id="table_body">
            {datos}
        </TableBody>
    );

}

export default TBodyMix;