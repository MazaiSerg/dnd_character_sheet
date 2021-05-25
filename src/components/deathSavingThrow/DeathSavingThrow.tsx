import React from "react";
import { Checkbox, CheckboxProps, FormControlLabel, Grid, withStyles } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { grey, red } from "@material-ui/core/colors";
import { SavingThrowType } from "../../types/SavingThrowType";

import "./DeathSavingThrow.css";

const DarkHeart = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[900]
    }
  },
  checked: {}
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const RedHeart = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600]
    }
  },
  checked: {}
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

type Props = {
  throwType: SavingThrowType
}

export function DeathSavingThrow(props: Props) {
  const [state, setState] = React.useState({
    checkedFirst: false,
    checkedSecond: false,
    checkedThird: false
  });

  const handleChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setState({ ...state, [event.target.name]: event.target.checked });
    } else {
      setState({
        checkedFirst: false, checkedSecond: false, checkedThird: false
      });
    }
  };
  const handleChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setState({ ...state, checkedFirst: true, checkedSecond: true });
    } else {
      setState({ ...state, checkedSecond: false, checkedThird: false });
    }
  };
  const handleChangeThird = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setState({
        checkedFirst: true, checkedSecond: true, checkedThird: true
      });
    } else {
      setState({ ...state, checkedThird: false });
    }
  };

  const CheckBoxType = props.throwType === SavingThrowType.success ? RedHeart : DarkHeart;
  const Label = <label>{props.throwType === SavingThrowType.success ? "успехи" : "провалы"}</label>;

  return (
    <Grid
      container
      justify="flex-end"
      direction="row"
      className="death-saving-throw_height"
    >
      <Grid item className="death-saving-throw_left-align">
        {Label}
      </Grid>
      <Grid item>
        <FormControlLabel
          control={<CheckBoxType checked={state.checkedFirst} onChange={handleChangeFirst} icon={<FavoriteBorder />}
                                 checkedIcon={<Favorite />} name="checkedFirst" />}
          label=""
          className="death-saving-throw_zero-padding"
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          control={<CheckBoxType checked={state.checkedSecond} onChange={handleChangeSecond} icon={<FavoriteBorder />}
                                 checkedIcon={<Favorite />} name="checkedSecond" />}
          label=""
          className="death-saving-throw_zero-padding"
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          control={<CheckBoxType checked={state.checkedThird} onChange={handleChangeThird} icon={<FavoriteBorder />}
                                 checkedIcon={<Favorite />} name="checkedThird" />}
          label=""
          className="death-saving-throw_zero-padding"
        />
      </Grid>
    </Grid>
  );
}
