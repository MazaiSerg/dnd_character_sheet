import React, { ReactElement } from "react";
import { Grid, TextField } from "@material-ui/core";

import './hitPointDices.css'

export function HitPointDices(): ReactElement {
    return (
        <Grid
            container
            direction="column"
            spacing={2}
        >
            <Grid item>
                Итого <TextField size="small" />
            </Grid>

            <Grid item>
                <TextField
                    className="text-field_short-padding"
                    label="Кость хитов"
                    size="small"
                    variant="outlined"
                />
            </Grid>
        </Grid>
    );
}
