import React from 'react'
import {Grid} from "@material-ui/core";
import {HitPointDices} from "./HitPointDices";
import {DeathSavingThoughts} from "./DeathSavingThoughts";

export function AdditionalVitalityInformation() {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item>
                <HitPointDices/>
            </Grid>

            <Grid item>
                <DeathSavingThoughts/>
            </Grid>
        </Grid>
    )
}
