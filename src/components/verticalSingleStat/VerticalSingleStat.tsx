import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import "./smallButton.css";
import "../../commonCSS/component_small-font.css";
import "./verticalStatContainer.css";

type Props = {
  statDescription: string
}

export function VerticalSingleStat(props: Props) {
  const [statBonus, setStatBonus] = useState(0)

  const handleChange = function(event: React.ChangeEvent<HTMLInputElement>) {
    const statValue = parseInt(event.target.value)
    const bonusValue = Math.floor((statValue - 10) / 2)
    setStatBonus(() => bonusValue || 0)
  }

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
      className="common-stats-elements__vertical-container"
    >
      <Typography>{props.statDescription}</Typography>
      <Typography>{statBonus}</Typography>
      <TextField
        size="small"
        className="common-stat-element_small-button"
        onChange={handleChange}
      />
    </Grid>
  );
}
