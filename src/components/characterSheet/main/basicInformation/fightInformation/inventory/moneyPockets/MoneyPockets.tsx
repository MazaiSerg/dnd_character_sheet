import React from 'react'
import {Grid} from "@material-ui/core";
import {SingleMoneyPocket} from "./SingleMoneyPocket";

export function MoneyPockets() {
    return (
        <div>
            <Grid
                container
                direction="row"
                spacing={1}
            >
                <SingleMoneyPocket moneyType="мм" />
                <SingleMoneyPocket moneyType="см" />
                <SingleMoneyPocket moneyType="эм" />
                <SingleMoneyPocket moneyType="зм" />
                <SingleMoneyPocket moneyType="пм" />
            </Grid>
        </div>
    )
}
