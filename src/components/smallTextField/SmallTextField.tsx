import React from 'react'
import { TextField } from "@material-ui/core";
import './smallTextField.css'
import classNames from "classnames";


export function SmallTextField() {

  return (
      <TextField
        className={classNames("small-text-field_small-font")}
      />
  )
}
