import React from 'react'
import {Grid} from "@material-ui/core";
import {HorizontalSingleStat} from "./commonStatsElements/HorizontalSingleStat";

export function SavingThrows() {
    return (
        <Grid
            container
            direction="column"
        >
            <HorizontalSingleStat statDescription="Вдохновение"/>
            <HorizontalSingleStat statDescription="Бонус мастерства"/>
            <div>
                <ul>
                    <li><HorizontalSingleStat statDescription="Силы"/></li>
                    <li><HorizontalSingleStat statDescription="Ловкости"/></li>
                    <li><HorizontalSingleStat statDescription="Телосложения"/></li>
                    <li><HorizontalSingleStat statDescription="Интеллекта"/></li>
                    <li><HorizontalSingleStat statDescription="Мудрости"/></li>
                    <li><HorizontalSingleStat statDescription="Харизмы"/></li>
                </ul>
                <div>Спасброски</div>
            </div>
            <div>
                <ul>
                    <li><HorizontalSingleStat statDescription="Акробатика"/></li>
                    <li><HorizontalSingleStat statDescription="Анализ"/></li>
                    <li><HorizontalSingleStat statDescription="Атлетика"/></li>
                    <li><HorizontalSingleStat statDescription="Внимательность"/></li>
                    <li><HorizontalSingleStat statDescription="Выживание"/></li>
                    <li><HorizontalSingleStat statDescription="Выступление"/></li>
                    <li><HorizontalSingleStat statDescription="Запугивание"/></li>
                    <li><HorizontalSingleStat statDescription="История"/></li>
                    <li><HorizontalSingleStat statDescription="Ловкость рук"/></li>
                    <li><HorizontalSingleStat statDescription="Магия"/></li>
                    <li><HorizontalSingleStat statDescription="Медицина"/></li>
                    <li><HorizontalSingleStat statDescription="Обман"/></li>
                    <li><HorizontalSingleStat statDescription="Природа"/></li>
                    <li><HorizontalSingleStat statDescription="Проницательность"/></li>
                    <li><HorizontalSingleStat statDescription="Религия"/></li>
                    <li><HorizontalSingleStat statDescription="Скрытность"/></li>
                    <li><HorizontalSingleStat statDescription="Убеждение"/></li>
                    <li><HorizontalSingleStat statDescription="Уход за животными"/></li>
                </ul>
                <div>Навыки</div>
            </div>
        </Grid>
    )
}
