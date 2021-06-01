import React from 'react';
import { i18n as i18nType } from 'i18next';
import { I18nextProvider, I18nContext } from 'react-i18next';

export type ProviderProps = {
  children: React.ReactNode;
  i18n: i18nType;
};

export function I18nProvider({ children, i18n }: ProviderProps) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export { I18nContext };
