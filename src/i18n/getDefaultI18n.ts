import i18n, { InitOptions } from 'i18next';
import { commonEn } from './locales/commonT/en';
import { commonRu } from './locales/commonT/ru';

export function getDefaultI18n(config?: Partial<InitOptions>) {
    i18n.init({
        resources: {
            en: {
                commonT: commonEn,
            },
            ru: {
                commonT: commonRu,
            },
        },
        lng: 'ru',
        fallbackLng: 'ru',

        interpolation: {
            escapeValue: false,
        },
        returnObjects: true,
        ...config,
    });

    return i18n;
}
