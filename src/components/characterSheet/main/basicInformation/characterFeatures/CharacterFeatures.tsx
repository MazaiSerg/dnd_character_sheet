import React from 'react'
import {Grid} from "@material-ui/core";
import {Personalization} from "./personalization/Personalization";
import {SkillsAndFeatures} from "./skillsAndFeatures/SkillsAndFeatures";

export function CharacterFeatures() {
    return (
        <Grid
            container
            direction="column"
            spacing={3}
        >
            <Grid item>
                <Personalization/>
            </Grid>
            <Grid item>
                <SkillsAndFeatures/>
            </Grid>
        </Grid>
    )
}
