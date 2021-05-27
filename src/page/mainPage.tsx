import React, { ReactElement } from "react";
import { Container, Grid } from "@material-ui/core";

import "../commonCSS/component_width-30-percents.css";

import { InputForm } from "../components/inputForm/InputForm";
import { BasicStatsList } from "../components/basicStatsList/BasicStatsList";
import { HorizontalSingleStat } from "../components/horizontalSingleStat/HorizontalSingleStat";
import { AttributesList } from "../components/attributesList/AttributesList";
import { savingThrowData, skillsData } from "../data/skillsData";
import { MediumTextFieldGridItem } from "../components/mediumTextField/MediumTextFieldGridItem";
import { Inventory } from "../components/inventory/Inventory";
import { Weapons } from "../components/weapons/Weapons";
import { BasicFightStats } from "../components/basicFightStats/BasicFightStats";
import { HitPoints } from "../components/hitPoints/HitPoints";
import { AdditionalVitalityInformation } from "../components/additionalVitalityInformation/AdditionalVitalityInformation";
import { ColumnGrid } from "../components/columnGrid/ColumnGrid";

export function MainPage() : ReactElement {
    return (
        <Container
            className="character-sheet__container"
            maxWidth="md"
        >
            <Grid
                container
                className="character-sheet-header__container"
                direction="row"
                wrap="nowrap"
            >
                <Grid item xs={5}>
                    <InputForm className="" description="Имя персонажа" />
                </Grid>
                <Grid item xs={10}>
                    <Grid
                        container
                        wrap="wrap"
                    >
                        <InputForm className="component_width-30-percents" description="Класс" />
                        <InputForm className="component_width-30-percents" description="Предыстория" />
                        <InputForm className="component_width-30-percents" description="Уровень" />
                        <InputForm className="component_width-30-percents" description="Раса" />
                        <InputForm className="component_width-30-percents" description="Мировоззрение" />
                        <InputForm className="component_width-30-percents" description="Опыт" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                spacing={5}
                wrap="nowrap"
            >
                <Grid item>
                    <ColumnGrid>
                        <Grid item>
                            <Grid
                                container
                                direction="row"
                                spacing={3}
                                wrap="nowrap"
                            >
                                <Grid item>
                                    <BasicStatsList />
                                </Grid>
                                <Grid item xs={10}>
                                    <ColumnGrid>
                                        <HorizontalSingleStat key={123121312} statDescription="Вдохновение" />
                                        <HorizontalSingleStat key={1121312} statDescription="Бонус мастерства" />
                                        <AttributesList attributes={savingThrowData} title="Спасброски" />
                                        <AttributesList attributes={skillsData} title="Навыки" />
                                    </ColumnGrid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <HorizontalSingleStat key={1312} statDescription="пассивная мудрость (внимательность)" />
                        </Grid>
                        <MediumTextFieldGridItem fieldDescription="Прочие владения и языки" />
                    </ColumnGrid>
                </Grid>
                <Grid item xs={4}>
                    <ColumnGrid>
                        <ColumnGrid>
                            <Grid item><BasicFightStats /></Grid>
                            <Grid item><HitPoints /></Grid>
                            <Grid item><AdditionalVitalityInformation /></Grid>
                        </ColumnGrid>

                        <Grid item>
                            <ColumnGrid>
                                <Grid item>
                                    <Weapons />
                                </Grid>
                                <MediumTextFieldGridItem fieldDescription="Заклинания" />
                            </ColumnGrid>
                        </Grid>

                        <Grid item><Inventory /></Grid>
                    </ColumnGrid>
                </Grid>
                <Grid item>
                    <ColumnGrid>
                        <Grid item>
                            <ColumnGrid spacing={1}>
                                <MediumTextFieldGridItem fieldDescription="Черты характера" />
                                <MediumTextFieldGridItem fieldDescription="Идеалы" />
                                <MediumTextFieldGridItem fieldDescription="Привязанности" />
                                <MediumTextFieldGridItem fieldDescription="Слабости" />
                            </ColumnGrid>
                        </Grid>
                        <MediumTextFieldGridItem fieldDescription="умения и особенности" />
                    </ColumnGrid>
                </Grid>
            </Grid>
        </Container>
    );
}
