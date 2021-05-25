import {Grid, TextField} from "@material-ui/core";
import React from 'react';

import './smallButton.css'
import './smallFont.css'

type Props = {
    statDescription: string
}

export function HorizontalSingleStat(props: Props) {
    return (
        <Grid
            container
            wrap="nowrap"
            direction="row"
        >
            <TextField className="common-stat-element_small-button"/>
            <div className="common-stats-elements_small-font">{props.statDescription}</div>
        </Grid>
    )
}
