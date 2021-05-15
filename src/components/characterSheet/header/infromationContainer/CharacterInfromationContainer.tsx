import {Grid} from '@material-ui/core'
import React from 'react'
import {InputForm} from './inputForm/InputForm'

export function CharacterInformationContainer() {
    return (
        <Grid
            container
            wrap="wrap">
            <InputForm className="" description="Класс" />
            <InputForm className="" description="Предыстория" />
            <InputForm className="" description="Уровень" />
            <InputForm className="" description="Раса" />
            <InputForm className="" description="Мировоззрение" />
            <InputForm className="" description="Опыт" />
        </Grid>
    )
}
