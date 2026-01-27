import { jsx as _jsx } from "react/jsx-runtime";
import { render, toPlainText } from '@react-email/render';
import { registry } from './templates/index.js';
export const buildEmail = async (config) => {
    const { templateName, locales, args } = config;
    const template = registry[templateName];
    const { Template, subject } = template;
    if (!Template)
        throw new Error(`Template ${templateName} not found`);
    // @ts-expect-error - Pas le choix :(
    const html = await render(_jsx(Template, { ...args, locale: locales }));
    const text = toPlainText(html);
    return { html, text, subject: subject(locales) };
};
export { getBestLanguage } from './helpers/getBestLanguage.js';
