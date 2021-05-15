import React from 'react'
import {Grid} from "@material-ui/core";
import {BasicFightStats} from "./basicFightStats/BasicFightStats";
import {HitPoints} from "./hitPoints/HitPoints";
import {AdditionalVitalityInformation} from "./additionalVitalityInformation/AdditionalVitalityInformation";

export function VitalityInformation() {
    return (
        <Grid
            container
            direction="column"
            spacing={3}
        >
            <Grid item><BasicFightStats/></Grid>
            <Grid item><HitPoints/></Grid>
            <Grid item><AdditionalVitalityInformation/></Grid>
        </Grid>
    )
}
