import React from "react";
import { TextField } from "@material-ui/core";
import { MoneyType } from "../../types/MoneyType";
import classNames from "classnames";

import './MoneyPocket.css'

type Props = {
  moneyType: MoneyType
}

export function MoneyPocket(props: Props) {
  return (
      <TextField
        label={props.moneyType}
        variant="outlined"
        size="small"
        className={classNames("medium-text-field_small-font ")}
      />
  );
}
