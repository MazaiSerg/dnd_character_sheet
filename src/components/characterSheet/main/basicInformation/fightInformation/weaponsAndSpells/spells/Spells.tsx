import React from 'react'
import {TextField} from "@material-ui/core";

export function Spells() {
    return (
        <TextField
            label="Заклинания"
            size="medium"
            variant="outlined"
            multiline
            fullWidth
        />
    )
}
