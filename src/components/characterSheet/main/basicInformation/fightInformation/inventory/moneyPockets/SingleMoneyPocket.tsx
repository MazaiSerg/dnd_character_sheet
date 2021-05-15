import React from 'react'
import {Grid, TextField} from "@material-ui/core";

type Props = {
    moneyType?: "мм" | "см" | "эм" | "зм" | "пм"
}

export function SingleMoneyPocket(props: Props) {
    return (
        <Grid item>
            <TextField
                label={props.moneyType}
                variant="outlined"
            />
        </Grid>
    )
}
