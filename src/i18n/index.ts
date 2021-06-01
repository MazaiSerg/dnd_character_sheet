import { useTranslation, Trans, withTranslation, Translation } from 'react-i18next';
import { I18nProvider, I18nContext } from './I18nProvider';
import { getDefaultI18n } from './getDefaultI18n';
import { commonRu } from './locales/commonT/ru';

function useCommonTranslation(): {
  t: (key: keyof typeof commonRu, variables?: Record<string, string | number | string[]>) => string | string[];
  } {
    return useTranslation('commonT');
}

export {
    useTranslation,
    useCommonTranslation,
    I18nProvider,
    Trans,
    withTranslation,
    Translation,
    getDefaultI18n,
    I18nContext,
};
