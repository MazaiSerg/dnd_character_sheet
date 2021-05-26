import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { MoneyPocket } from "../moneyPocket/MoneyPocket";
import { MoneyType } from "../../types/MoneyType";

export function MoneyPocketList(): ReactElement {
    const moneyPocketsList = Object.values(MoneyType).map((value, index) => {
        return (
            <Grid key={index} item>
                <MoneyPocket moneyType={value} />
            </Grid>
        );
    });
    return (
        <div>
            <Grid
                container
                direction="row"
                spacing={1}
                wrap="nowrap"
            >
                {moneyPocketsList}
            </Grid>
        </div>
    );
}
