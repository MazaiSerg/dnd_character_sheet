import React, { ReactElement } from "react";
import { Grid, TextField } from "@material-ui/core";

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
                    label="Кость хитов"
                    size="small"
                    variant="outlined"
                />
            </Grid>
        </Grid>
    );
}
