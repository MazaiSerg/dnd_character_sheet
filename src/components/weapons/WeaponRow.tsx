import React from "react";
import { Grid, TextField } from "@material-ui/core";

export function WeaponRow() {
  return (
    <Grid
      container
      spacing={1}
      wrap="nowrap"
    >
      <Grid item xs={7}>
        <TextField
          placeholder="название"
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          placeholder="БА"
        />
      </Grid>

      <Grid item xs={7}>
        <TextField
          placeholder="урон/вид"
        />
      </Grid>
    </Grid>
  );
}
