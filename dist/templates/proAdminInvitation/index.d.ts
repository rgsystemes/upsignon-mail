import { Locales } from '../index.js';
type Args = {
    adminImportLink: string;
    loginPageLink: string;
    expirationDate: Date;
};
declare const Template: ({ adminImportLink, loginPageLink, expirationDate, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ adminImportLink, loginPageLink, expirationDate, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
