import React from 'react'
import {Grid} from "@material-ui/core";
import {VitalityInformation} from "./vitalityInformation/VitalityInformation";
import {WeaponsAndSpells} from "./weaponsAndSpells/WeaponsAndSpells";
import {Inventory} from "./inventory/Inventory";

export function FightInformation() {
    return (
        <Grid
            container
            direction="column"
            spacing={3}
            >
            <Grid item><VitalityInformation/></Grid>

            <Grid item><WeaponsAndSpells/></Grid>

            <Grid item><Inventory /></Grid>
        </Grid>
    )
}
