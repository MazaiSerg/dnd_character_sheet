import React from 'react'
import {Grid, TextField} from "@material-ui/core";

export function WeaponRow() {
    return (
        <Grid
            container
            spacing={1}
            wrap="nowrap"
        >
            <Grid item>
                <TextField
                    placeholder="название"
                />
            </Grid>

            <Grid item>
                <TextField
                    placeholder="БА"
                />
            </Grid>

            <Grid item>
                <TextField
                    placeholder="урон/вид"
                />
            </Grid>
        </Grid>
    )
}
