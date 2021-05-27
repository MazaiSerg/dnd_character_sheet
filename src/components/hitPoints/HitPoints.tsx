import React, { ReactElement } from "react";
import { Grid, TextField } from "@material-ui/core";

export function HitPoints(): ReactElement {
    return (
        <Grid
            container
            direction="column"
            spacing={1}
        >
            <Grid item>
                <TextField
                    fullWidth
                    label="Максимум хитов"
                    size="small"
                    variant="outlined"
                />
            </Grid>

            <Grid item>
                <TextField
                    fullWidth
                    label="текущие хиты"
                    size="medium"
                    variant="outlined"
                />
            </Grid>

            <Grid item>
                <TextField
                    fullWidth
                    label="Временные хиты"
                    size="small"
                    variant="outlined"
                />
            </Grid>
        </Grid>
    );
}
