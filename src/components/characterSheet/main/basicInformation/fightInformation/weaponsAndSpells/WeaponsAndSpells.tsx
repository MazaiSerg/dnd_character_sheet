import React from 'react'
import {Weapons} from "./weapons/Weapons";
import {Spells} from "./spells/Spells";
import {Grid} from "@material-ui/core";

export function WeaponsAndSpells() {
    return (
        <Grid
            container
            direction="column"
            spacing={2}
        >
            <Grid item>
                <Weapons/>
            </Grid>
            <Grid item>
                <Spells/>
            </Grid>
        </Grid>
    )
}
