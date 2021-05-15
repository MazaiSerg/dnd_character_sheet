import React from 'react'
import {Grid, Radio} from "@material-ui/core";

export function DeathSavingThoughts() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Grid
            container
            direction="column"
            spacing={3}
        >
            <Grid item>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                />
                <Radio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                />
            </Grid>

            <Grid item>
                <Radio
                    checked={selectedValue === 'a1'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A1' }}
                />
                <Radio
                    checked={selectedValue === 'b1'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B1' }}
                />
                <Radio
                    checked={selectedValue === 'c1'}
                    onChange={handleChange}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C1' }}
                />
            </Grid>

            <Grid item>
                Спасброски от смерти
            </Grid>
        </Grid>
    )
}
