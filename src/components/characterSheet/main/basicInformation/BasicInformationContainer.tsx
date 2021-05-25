import React from 'react';
import {Grid} from "@material-ui/core";
import {Stats} from "./stats/Stats";

export function BasicInformationContainer() {
    return (
        <Grid
            container
            direction="row"
        >
            <Stats />
        </Grid>
    )
}
