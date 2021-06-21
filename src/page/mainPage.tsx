import React, { ReactElement } from "react";
import { Container, Grid } from "@material-ui/core";

import "../commonCSS/component_width-33-percents.css";

import { InputForm } from "../components/inputForm/InputForm";
import { BasicStatsList } from "../components/basicStatsList/BasicStatsList";
import { HorizontalSingleStat } from "../components/horizontalSingleStat/HorizontalSingleStat";
import { AttributesList } from "../components/attributesList/AttributesList";
import { MediumTextFieldGridItem } from "../components/mediumTextField/MediumTextFieldGridItem";
import { Inventory } from "../components/inventory/Inventory";
import { Weapons } from "../components/weapons/Weapons";
import { BasicFightStats } from "../components/basicFightStats/BasicFightStats";
import { HitPoints } from "../components/hitPoints/HitPoints";
import { AdditionalVitalityInformation } from "../components/additionalVitalityInformation/AdditionalVitalityInformation";
import { ColumnGrid } from "../components/columnGrid/ColumnGrid";
import { useCommonTranslation } from "../i18n";

export function MainPage(): ReactElement {
    const { t } = useCommonTranslation();
    return (
        <Container
            className="character-sheet__container"
            maxWidth="md"
        >
            <ColumnGrid
                withoutBackground
                spacing={2}
            >
                <Grid item>
                    <Grid
                        container
                        align-items="flex-end"
                        className="character-sheet-header__container"
                        direction="row"
                        justify="space-between"
                        wrap="nowrap"
                    >
                        <Grid item xs={5}>
                            <InputForm className="" description={t("name") as string} />
                        </Grid>
                        <Grid item xs={10}>
                            <Grid
                                container
                                wrap="wrap"
                            >
                                <InputForm className="component_width-33-percents" description={t("characterClass") as string} />
                                <InputForm className="component_width-33-percents" description={t("backStory") as string} />
                                <InputForm className="component_width-33-percents" description={t("level") as string} />
                                <InputForm className="component_width-33-percents" description={t("race") as string} />
                                <InputForm className="component_width-33-percents" description={t("augment") as string} />
                                <InputForm className="component_width-33-percents" description={t("experiencePoints") as string} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
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
                                            <ColumnGrid spacing={1}>
                                                <Grid item>
                                                    <HorizontalSingleStat statDescription="Вдохновение" />
                                                </Grid>
                                                <Grid item>
                                                    <HorizontalSingleStat statDescription="Бонус мастерства" />
                                                </Grid>
                                                <Grid item>
                                                    <AttributesList attributes={t('savingThrowData') as string[]} title="Спасброски" />
                                                </Grid>
                                                <Grid item>
                                                    <AttributesList attributes={t('skillsData') as string[]} title="Навыки" />
                                                </Grid>
                                            </ColumnGrid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <HorizontalSingleStat statDescription="пассивная мудрость (внимательность)" />
                                </Grid>
                                <MediumTextFieldGridItem fieldDescription="Прочие владения и языки" />
                            </ColumnGrid>
                        </Grid>
                        <Grid item xs={4}>
                            <ColumnGrid>
                                <Grid item>
                                    <ColumnGrid>
                                        <Grid item><BasicFightStats /></Grid>
                                        <Grid item><HitPoints /></Grid>
                                        <Grid item><AdditionalVitalityInformation /></Grid>
                                    </ColumnGrid>
                                </Grid>

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
                </Grid>
            </ColumnGrid>
        </Container>
    );
}
