import React from "react";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function THead(props)
{
    const cabeceras = props.columnas.map((columna, index) => {
        return <TableCell key={index}>{columna}</TableCell>;
    });

    return(
        <TableHead>
            <TableRow>
                {cabeceras}
            </TableRow>
        </TableHead>

    );
}

export default THead;