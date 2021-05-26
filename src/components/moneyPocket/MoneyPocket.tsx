import React, { ReactElement } from "react";
import { TextField } from "@material-ui/core";
import { MoneyType } from "../../types/MoneyType";
import classNames from "classnames";

import "./MoneyPocket.css";

type Props = {
  moneyType: MoneyType
}

export function MoneyPocket(props: Props): ReactElement {
    return (
        <TextField
            className={classNames("medium-text-field_small-font ")}
            label={props.moneyType}
            size="small"
            variant="outlined"
        />
    );
}
