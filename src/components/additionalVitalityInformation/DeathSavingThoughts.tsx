import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { DeathSavingThrow } from "../deathSavingThrow/DeathSavingThrow";
import { SavingThrowType } from "../../types/SavingThrowType";
import { ColumnGrid } from "../columnGrid/ColumnGrid";

export function DeathSavingThoughts(): ReactElement {

    return (
        <ColumnGrid spacing={0}>
            <Grid item>
                <DeathSavingThrow throwType={SavingThrowType.success} />
            </Grid>

            <Grid item>
                <DeathSavingThrow throwType={SavingThrowType.fail} />
            </Grid>

            <Grid item>
                Спасброски от смерти
            </Grid>
        </ColumnGrid>
    );
}
