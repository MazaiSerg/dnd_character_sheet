import React from 'react'
import {TextField} from "@material-ui/core";

export function SkillsAndFeatures() {
    return (
            <TextField
                label="Умения и особенности"
                size="medium"
                variant="outlined"
                multiline
                fullWidth
                />
    )
}
