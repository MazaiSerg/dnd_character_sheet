import {Grid} from '@material-ui/core'
import React from 'react'
import {InputForm} from './inputForm/InputForm'

export function NameContainer() {
    return (
        <Grid container>
            <div>
                <InputForm className="" description="Имя персонажа" />
            </div>
        </Grid>
    )

}
