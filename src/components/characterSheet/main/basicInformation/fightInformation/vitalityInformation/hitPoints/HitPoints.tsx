import React from 'react'
import {Grid, TextField} from "@material-ui/core";

export function HitPoints() {
    return (
        <Grid
            container
            direction="column"
            spacing={1}
            >
            <Grid item>
                <TextField
                    label="Максимум хитов"
                    size="small"
                    variant="outlined"
                    fullWidth
                    />
            </Grid>


            <Grid item>
                <TextField
                    label="текущие хиты"
                    size="medium"
                    variant="outlined"
                    fullWidth
                />
            </Grid>


            <Grid item>
                <TextField
                    label="Временные хиты"
                    size="small"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}
