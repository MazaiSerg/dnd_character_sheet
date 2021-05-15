import React from "react";
import { Grid } from "@material-ui/core";
import { WeaponRow } from "./WeaponRow";

export function Weapons() {
  return (
    <Grid
      container
      spacing={1}
    >
      <Grid item>
        <Grid
          container
          justify="space-around"
          spacing={1}
        >
          <Grid item xs={5}>Название</Grid>
          <Grid item xs={3}>Бонус атаки</Grid>
          <Grid item xs={4}>Урон/вид</Grid>
        </Grid>
      </Grid>
      <Grid item><WeaponRow /></Grid>
      <Grid item><WeaponRow /></Grid>
      <Grid item><WeaponRow /></Grid>
    </Grid>
  );
}
