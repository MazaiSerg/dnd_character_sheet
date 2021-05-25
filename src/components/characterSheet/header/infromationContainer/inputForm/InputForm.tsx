import './inputForm.css'
import {TextField} from "@material-ui/core";
import classNames from "classnames";
import React from "react";

type Props = {
    className: string;
    description: string;
}

export function InputForm(props: Props) {
    return (
        <div>
            <TextField
                type="text"
                className={classNames("character-sheet-header-form__input", props.className)}
                size="small"
                variant="filled"
                placeholder={props.description}
                helperText={props.description}
                margin="dense"
            >
            </TextField>
        </div>
    )
}
