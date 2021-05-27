import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { MoneyPocketList } from "../moneyPocketList/MoneyPocketList";
import { MediumTextFieldGridItem } from "../mediumTextField/MediumTextFieldGridItem";
import { ColumnGrid } from "../columnGrid/ColumnGrid";

export function Inventory(): ReactElement {
    return (
        <ColumnGrid spacing={1}>
            <Grid item><MoneyPocketList /></Grid>

            <MediumTextFieldGridItem fieldDescription="Инвентарь" />
        </ColumnGrid>
    );
}
