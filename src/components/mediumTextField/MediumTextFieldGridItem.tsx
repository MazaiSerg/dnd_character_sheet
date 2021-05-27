import { Grid, TextField } from "@material-ui/core";
import React, { ReactElement } from "react";

type Props = {
  fieldDescription: string
}

export function MediumTextFieldGridItem(props: Props): ReactElement {
    return (
        <Grid item>
            <TextField
                fullWidth
                multiline
                label={props.fieldDescription}
                size="medium"
                variant="outlined"
            />
        </Grid>
    );
}
