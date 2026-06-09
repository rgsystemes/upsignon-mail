import { jsx as _jsx } from "react/jsx-runtime";
import { render, toPlainText } from '@react-email/render';
import { registry } from './templates/index.js';
export const buildEmail = async (config) => {
    const { templateName, locales, args, ianaTimezone = 'Europe/Paris' } = config;
    const template = registry[templateName];
    const { Template, subject } = template;
    if (!Template)
        throw new Error(`Template ${templateName} not found`);
    const html = await render(_jsx(Template, { ...args, locale: locales, ianaTimezone: ianaTimezone }));
    const text = toPlainText(html);
    return { html, text, subject: subject(locales) };
};
export { getBestLanguage } from './helpers/getBestLanguage.js';
