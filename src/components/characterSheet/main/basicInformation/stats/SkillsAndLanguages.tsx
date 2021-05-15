import React from 'react'
import {TextField} from "@material-ui/core";

export function SkillsAndLanguages() {
    return (
        <div>
            <TextField
                label="Прочие владения и языки"
                size="medium"
                variant="outlined"
                multiline
                fullWidth
            >
            </TextField>
        </div>
    )
}
