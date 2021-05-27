import { Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import React, { ReactElement } from "react";

type Props = {
  className: string;
  description: string;
}

export function InputForm(props: Props): ReactElement {
    return (
        <Grid
            item
            className={classNames("", props.className)}
        >
            <TextField
                helperText={props.description}
                margin="dense"
                placeholder={props.description}
                size="small"
                type="text"
                variant="filled"
            >
            </TextField>
        </Grid>
    );
}
