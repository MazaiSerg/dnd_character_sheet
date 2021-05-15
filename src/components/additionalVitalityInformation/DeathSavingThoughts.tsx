import React from "react";
import { Grid } from "@material-ui/core";
import { DeathSavingThrow } from "../deathSavingThrow/DeathSavingThrow";
import { SavingThrowType } from "../../types/SavingThrowType";

export function DeathSavingThoughts() {

  return (
    <Grid
      container
      direction="column"
    >
      <Grid item>
        <DeathSavingThrow throwType={SavingThrowType.success} />
      </Grid>

      <Grid item>
        <DeathSavingThrow throwType={SavingThrowType.fail} />
      </Grid>

      <Grid item>
        Спасброски от смерти
      </Grid>
    </Grid>
  );
}
