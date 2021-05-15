import React from 'react'
import {Grid, TextField} from "@material-ui/core";
import {MoneyPockets} from "./moneyPockets/MoneyPockets";

export function Inventory() {
    return (
        <div>
            <Grid
                container
                direction="column"
                spacing={1}
            >
                <Grid item><MoneyPockets /></Grid>

                <Grid item>
                    <TextField
                        label="Инвентарь"
                        size="medium"
                        variant="outlined"
                        multiline
                        fullWidth
                        />
                </Grid>
            </Grid>
        </div>
    )
}
