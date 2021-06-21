import React, { ReactElement } from "react";
import { Grid, TextField } from "@material-ui/core";
import { ColumnGrid } from "../columnGrid/ColumnGrid";

export function HitPoints(): ReactElement {
    return (
        <ColumnGrid spacing={1}>
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
        </ColumnGrid>
    );
}
