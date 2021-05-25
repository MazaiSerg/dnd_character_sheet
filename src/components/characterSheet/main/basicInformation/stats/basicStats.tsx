import React from 'react'
import {Grid} from "@material-ui/core";
import {VerticalSingleStat} from "./commonStatsElements/VerticalSingleStat";

export function BasicStats() {
    return (
        <Grid
            container
            direction="column"
            justify="space-between"
        >
            <VerticalSingleStat statDescription="Сила"/>
            <VerticalSingleStat statDescription="Ловкость"/>
            <VerticalSingleStat statDescription="Телосложение"/>
            <VerticalSingleStat statDescription="Интеллект"/>
            <VerticalSingleStat statDescription="Мудрость"/>
            <VerticalSingleStat statDescription="Харизма"/>
        </Grid>
    )
}
