import React from "react";
import { TextField } from "@material-ui/core";
import { MoneyType } from "../../types/MoneyType";

type Props = {
  moneyType: MoneyType
}

export function MoneyPocket(props: Props) {
  return (
      <TextField
        label={props.moneyType}
        variant="outlined"
      />
  );
}
