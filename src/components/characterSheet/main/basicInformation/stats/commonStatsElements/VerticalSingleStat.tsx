import {Grid, TextField, Typography} from "@material-ui/core";
import React from 'react';

import './smallButton.css'
import './smallFont.css'
import './verticalStatContainer.css'

type Props = {
    statDescription: string
}


export function VerticalSingleStat(props: Props) {
    return (
        <Grid
            container
            direction="column"
            alignContent="center"
            alignItems="center"
            className="common-stats-elements__vertical-container"
        >
            <Typography className="common-stats-elements_small-font">{props.statDescription}</Typography>
            <Typography>{0}</Typography>
            <TextField
                size="small"
                className="common-stat-element_small-button"
            />
        </Grid>
    )
}
