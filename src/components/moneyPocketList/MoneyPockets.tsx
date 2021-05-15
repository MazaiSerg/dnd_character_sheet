import React from "react";
import { Grid } from "@material-ui/core";
import { MoneyPocket } from "../moneyPocket/MoneyPocket";
import { MoneyType } from "../../types/MoneyType";

export function MoneyPockets() {
  const moneyPocketsList = Object.values(MoneyType).map((value, index) => {
    return (
      <Grid item key={index}>
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
      >
        {moneyPocketsList}
      </Grid>
    </div>
  );
}
