import { Locales } from '../index.js';
type Args = {
    consoleLink: string;
    expirationDate: Date;
};
declare const Template: ({ consoleLink, expirationDate, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ consoleLink, expirationDate, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
