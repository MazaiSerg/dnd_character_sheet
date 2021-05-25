import { Grid } from "@material-ui/core";
import React from "react";

import { SmallTextField } from "../smallTextField/SmallTextField";

import "../verticalSingleStat/smallButton.css";
import "../../commonCSS/component_small-font.css";

type Props = {
  key: number
  statDescription: string
}

export function HorizontalSingleStat(props: Props) {
  return (
    <Grid
      container
      wrap="nowrap"
      direction="row"
    >
      <SmallTextField />
      <div className="common-stats-elements_small-font">{props.statDescription}</div>
    </Grid>
  );
}
