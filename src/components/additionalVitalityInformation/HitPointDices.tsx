import React from "react";
import { Grid, TextField } from "@material-ui/core";

export function HitPointDices() {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid item>
        Итого <TextField size="small" />
      </Grid>

      <Grid item>
        <TextField
          variant="outlined"
          size="medium"
          label="Кость хитов"
        />
      </Grid>
    </Grid>
  );
}
