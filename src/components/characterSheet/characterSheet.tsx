import './characterSheet.css';
import {Header} from "./header/Header";
import {Container} from "@material-ui/core";
import React from "react";
import {Main} from "./main/Main";

export function CharacterSheet() {
    return (
        <Container
            maxWidth="md"
            className="character-sheet__container">
            <Header />
            <Main />
        </Container>
    );
}
