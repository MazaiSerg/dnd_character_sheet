import React, { ReactChild, ReactChildren, ReactElement } from "react";
import { Grid, GridSpacing } from "@material-ui/core";

import './columnGrid.css'

type Props = {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  spacing?: GridSpacing
}

export function ColumnGrid(props: Props): ReactElement {
    const spacingValue = typeof props.spacing === "number" ? props.spacing : 3
    return (
        <Grid
            container
            className="sub-field_background"
            direction="column"
            spacing={spacingValue}
        >
            {props.children}
        </Grid>
    );
}
