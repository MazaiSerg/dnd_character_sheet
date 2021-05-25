import React from 'react';
import {Grid} from "@material-ui/core";
import {BasicInformationContainer} from "./basicInformation/BasicInformationContainer";
import {FightInformation} from "./basicInformation/fightInformation/fightInformation";
import {CharacterFeatures} from "./basicInformation/characterFeatures/CharacterFeatures";

export function Main() {
    return (
        <Grid
            container
            direction="row"
            wrap="nowrap"
            spacing={5}
        >
            <Grid item>
                <BasicInformationContainer/>
            </Grid>
            <Grid item xs={4}>
                <FightInformation/>
            </Grid>
            <Grid item>
                <CharacterFeatures/>
            </Grid>
        </Grid>
    )
}
