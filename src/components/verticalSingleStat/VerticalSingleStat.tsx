import { Grid, TextField, Typography } from "@material-ui/core";
import React, { ReactElement, useState } from "react";

import "./smallButton.css";
import "../../commonCSS/component_small-font.css";
import "./verticalStatContainer.css";

type Props = {
  statDescription: string
}

export function VerticalSingleStat(props: Props): ReactElement {
    const [statBonus, setStatBonus] = useState(0);

    const handleChange = function(event: React.ChangeEvent<HTMLInputElement>) {
        const statValue = parseInt(event.target.value);
        const bonusValue = Math.floor((statValue - 10) / 2);
        setStatBonus(() => bonusValue || 0);
    };

    return (
        <Grid
            container
            alignContent="center"
            alignItems="center"
            className="common-stats-elements__vertical-container"
            direction="column"
        >
            <Typography>{props.statDescription}</Typography>
            <Typography>{statBonus}</Typography>
            <TextField
                className="common-stat-element_small-button"
                size="small"
                onChange={handleChange}
            />
        </Grid>
    );
}
