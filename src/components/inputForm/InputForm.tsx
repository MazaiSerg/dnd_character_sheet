import { Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import React from "react";

type Props = {
  className: string;
  description: string;
}

export function InputForm(props: Props) {
  return (
    <Grid
      item
      className={classNames("", props.className)}
    >
      <TextField
        type="text"
        size="small"
        variant="filled"
        placeholder={props.description}
        helperText={props.description}
        margin="dense"
      >
      </TextField>
    </Grid>
  );
}
