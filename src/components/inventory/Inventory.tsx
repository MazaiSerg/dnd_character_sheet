import React from "react";
import { Grid } from "@material-ui/core";
import { MoneyPocketList } from "../moneyPocketList/MoneyPocketList";
import { MediumTextFieldGridItem } from "../mediumTextField/MediumTextFieldGridItem";

export function Inventory() {
  return (
    <Grid
      container
      direction="column"
      spacing={1}
    >
      <Grid item><MoneyPocketList /></Grid>

      <MediumTextFieldGridItem fieldDescription="Инвентарь" />
    </Grid>
  );
}
