import React from "react";
import { Grid } from "@material-ui/core";
import { MoneyPockets } from "../moneyPocketList/MoneyPockets";
import { MediumTextFieldGridItem } from "../mediumTextField/MediumTextFieldGridItem";

export function Inventory() {
  return (
    <Grid
      container
      direction="column"
      spacing={1}
    >
      <Grid item><MoneyPockets /></Grid>

      <MediumTextFieldGridItem fieldDescription="Инвентарь" />
    </Grid>
  );
}
