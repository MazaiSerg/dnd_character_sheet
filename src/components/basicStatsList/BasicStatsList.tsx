import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { VerticalSingleStat } from "../verticalSingleStat/VerticalSingleStat";
import { basicStatsData } from "../../data/skillsData";

export function BasicStatsList(): ReactElement {
    const stats = basicStatsData.map((value, index) => {
        return (
            <Grid key={index} item>
                <VerticalSingleStat statDescription={value} />
            </Grid>
        );

    });
    return (
        <Grid
            container
            direction="column"
            justify="space-between"
            spacing={2}
        >
            {stats}
        </Grid>
    );
}
