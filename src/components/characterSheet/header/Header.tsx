import './header.css';
import {Grid} from '@material-ui/core';
import React from 'react';
import {NameContainer} from "./infromationContainer/NameContainer";
import {CharacterInformationContainer} from "./infromationContainer/CharacterInfromationContainer";

export function Header() {
    return (
        <Grid
            container
            direction="row"
            wrap="nowrap"
            className="character-sheet-header__container">
            <NameContainer />
            <CharacterInformationContainer />
        </Grid>
    )
}
