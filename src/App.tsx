import React, { ReactElement, useMemo } from "react";
import "./App.css";
import { MainPage } from "./page/mainPage";
import { getDefaultI18n, I18nProvider } from "./i18n";

export function App(): ReactElement {
    const i18n = useMemo(() => getDefaultI18n(), []);
    return (
        <I18nProvider i18n={i18n}>
            <MainPage />
        </I18nProvider>
    )
}
