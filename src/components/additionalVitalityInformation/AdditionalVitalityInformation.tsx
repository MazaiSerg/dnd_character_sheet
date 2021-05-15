import React from "react";
import { Grid } from "@material-ui/core";
import { HitPointDices } from "./HitPointDices";
import { DeathSavingThoughts } from "./DeathSavingThoughts";

export function AdditionalVitalityInformation() {
  return (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      spacing={2}
    >
      <Grid item xs={6}>
        <HitPointDices />
      </Grid>

      <Grid item xs={10}>
        <DeathSavingThoughts />
      </Grid>
    </Grid>
  );
}
