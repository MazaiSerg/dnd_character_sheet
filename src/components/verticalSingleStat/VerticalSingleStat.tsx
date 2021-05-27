import { Grid, TextField, Typography } from "@material-ui/core";
import React, { ReactElement, useState } from "react";

import "../../commonCSS/component_small-font.css";
import "../../commonCSS/component-small-button_width.css"
import "./verticalStatContainer.css";

type Props = {
  statDescription: string
}

export function VerticalSingleStat(props: Props): ReactElement {
    const [statBonus, setStatBonus] = useState("-");

    const handleChange = function(event: React.ChangeEvent<HTMLInputElement>) {
        const statValue = parseInt(event.target.value);
        const bonusValue = Math.floor((statValue - 10) / 2).toString();
        setStatBonus(() => bonusValue || "-");
    };

    return (
        <Grid
            container
            alignContent="center"
            alignItems="center"
            className="common-stats-elements__vertical-container"
            direction="column"
        >
            <Grid item>
                <Typography>{props.statDescription}</Typography>
            </Grid>
            <Grid item>
                <Typography className="throw-bonus__element">{statBonus}</Typography>
            </Grid>
            <Grid item>
                <TextField
                    className="common-small-button_width"
                    size="small"
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    );
}
