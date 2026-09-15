import { Locales } from '../index.js';
type Args = {
    bankSetupUrl: string;
    consoleLink: string;
    userEmail: string;
};
declare const Template: ({ bankSetupUrl, consoleLink, userEmail, locale, }: Args & {
    locale: Locales;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
export declare const templateConfig: {
    readonly Template: ({ bankSetupUrl, consoleLink, userEmail, locale, }: Args & {
        locale: Locales;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
