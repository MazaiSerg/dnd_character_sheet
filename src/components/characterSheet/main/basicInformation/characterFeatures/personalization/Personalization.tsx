import React from 'react'
import {Grid} from "@material-ui/core";
import {SingleField} from "./SingleField";

export function Personalization() {
    return (
        <Grid>
            <SingleField fieldDescription="Черты характера"/>
            <SingleField fieldDescription="Идеалы"/>
            <SingleField fieldDescription="Привязанности"/>
            <SingleField fieldDescription="Слабости"/>
        </Grid>
    )
}
