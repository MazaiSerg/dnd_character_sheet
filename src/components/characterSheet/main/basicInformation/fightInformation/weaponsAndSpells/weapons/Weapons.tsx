import React from 'react'
import {Grid} from "@material-ui/core";
import {WeaponRow} from "./WeaponRow";

export function Weapons() {
    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item>
                <Grid
                    container
                    justify="space-around"
                    >
                    <Grid item>Название</Grid>
                    <Grid item>Бонус атаки</Grid>
                    <Grid item>Урон/вид</Grid>
                </Grid>
            </Grid>
            <Grid item><WeaponRow/></Grid>
            <Grid item><WeaponRow/></Grid>
            <Grid item><WeaponRow/></Grid>
        </Grid>
    )
}
