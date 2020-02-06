import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enCommon from './locale/en/common.yaml';
import plCommon from './locale/pl/common.yaml';
import plMain from './locale/pl/main.yaml';

const messages = {
    en: { ...enCommon },
    pl: { ...plCommon, ...plMain}
}

export default function initI18n() {
    Vue.use(VueI18n);

    return new VueI18n({
        locale: 'en',
        messages,
        fallbackLocale: 'en',
        fallbackRoot: false,
        silentFallbackWarn: true
    });
}