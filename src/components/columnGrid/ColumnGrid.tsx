import React, { ReactChild, ReactChildren, ReactElement } from "react";
import { Grid, GridSpacing } from "@material-ui/core";

import './columnGrid.css'

type Props = {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  spacing?: GridSpacing
  withoutBackground?: boolean
}

export function ColumnGrid(props: Props): ReactElement {
    const spacingValue = typeof props.spacing === "number" ? props.spacing : 3
    const classNames = props.withoutBackground ? "" : "sub-field_background"
    return (
        <Grid
            container
            className={classNames}
            direction="column"
            spacing={spacingValue}
        >
            {props.children}
        </Grid>
    );
}
