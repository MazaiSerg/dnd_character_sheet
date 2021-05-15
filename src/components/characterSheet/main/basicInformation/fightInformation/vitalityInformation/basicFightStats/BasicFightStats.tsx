import React from 'react'
import {Grid, TextField} from "@material-ui/core";

export function BasicFightStats() {
    return (
        <Grid
            container
            spacing={3}
            wrap="nowrap"
        >
            <Grid item>
                <TextField label="КД"/>
            </Grid>
            <Grid item>
                <TextField label="Инициатива"/>
            </Grid>
            <Grid item>
                <TextField label="Скорость"/>
            </Grid>
        </Grid>
    )
}
