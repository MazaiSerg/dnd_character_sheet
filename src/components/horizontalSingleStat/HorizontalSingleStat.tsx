import { Grid } from "@material-ui/core";
import React, { ReactElement } from "react";

import { SmallTextField } from "../smallTextField/SmallTextField";

import "../../commonCSS/component_small-font.css";

type Props = {
  statDescription: string
}

export function HorizontalSingleStat(props: Props): ReactElement {
    return (
        <Grid
            container
            direction="row"
            wrap="nowrap"
        >
            <SmallTextField />
            <div className="common-stats-elements_small-font">{props.statDescription}</div>
        </Grid>
    );
}
