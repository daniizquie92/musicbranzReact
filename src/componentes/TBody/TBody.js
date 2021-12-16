import React from "react";
import Grid from "@mui/material/Grid";
function TBody(props)
{
    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <h1>{props.datos.Title}</h1>
            </Grid>
            <Grid item xs={4}>
                <h2>{props.datos.Ratings[0].Value}</h2>
                
            </Grid>
            <Grid item xs={12}>
                <img src={props.datos.Poster} alt={props.datos.Title}/>
            </Grid>
        </Grid>
    );
}

export default TBody;