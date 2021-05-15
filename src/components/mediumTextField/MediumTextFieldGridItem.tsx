import { Grid, TextField } from "@material-ui/core";
import React from "react";

type Props = {
  fieldDescription: string
}

export function MediumTextFieldGridItem(props: Props) {
  return (
    <Grid item>
      <TextField
        label={props.fieldDescription}
        size="medium"
        variant="outlined"
        multiline
        fullWidth
      />
    </Grid>
  );
}
