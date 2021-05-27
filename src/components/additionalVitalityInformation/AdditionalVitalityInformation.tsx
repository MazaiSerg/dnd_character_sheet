import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { HitPointDices } from "../hitPointDices/HitPointDices";
import { DeathSavingThoughts } from "./DeathSavingThoughts";

export function AdditionalVitalityInformation(): ReactElement{
    return (
        <Grid
            container
            direction="row"
            spacing={2}
            wrap="nowrap"
        >
            <Grid item xs={6}>
                <HitPointDices />
            </Grid>

            <Grid item xs={10}>
                <DeathSavingThoughts />
            </Grid>
        </Grid>
    );
}
