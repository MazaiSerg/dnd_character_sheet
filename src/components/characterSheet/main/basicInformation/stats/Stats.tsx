import React from 'react';
import {Grid} from "@material-ui/core";
import {HorizontalSingleStat} from "./commonStatsElements/HorizontalSingleStat";
import {BasicStats} from "./basicStats";
import {SavingThrows} from "./SavingThrows";
import {SkillsAndLanguages} from "./SkillsAndLanguages";

export function Stats() {
    return (
        <Grid
            container
            direction="column"
            spacing={3}
        >
            <Grid item>
                <Grid
                    container
                    direction="row"
                    wrap="nowrap"
                    spacing={3}
                >
                    <Grid item>
                        <BasicStats/>
                    </Grid>
                    <Grid item xs={10}>
                        <SavingThrows/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <HorizontalSingleStat statDescription="пассивная мудрость (внимательность)"/>
            </Grid>

            <Grid item>
                <SkillsAndLanguages/>
            </Grid>
        </Grid>
    )
}
