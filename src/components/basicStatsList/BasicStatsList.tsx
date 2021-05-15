import React from "react";
import { Grid } from "@material-ui/core";
import { VerticalSingleStat } from "../verticalSingleStat/VerticalSingleStat";
import { basicStatsData } from "../../data/skillsData";

export function BasicStatsList() {
  const stats = basicStatsData.map((value, index) => {
    return (
      <Grid item key={index}>
        <VerticalSingleStat statDescription={value} />
      </Grid>
    );

  });
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      spacing={1}
    >
      {stats}
    </Grid>
  );
}
