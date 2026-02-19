import { Locales } from '../index.js';
type Args = {
    deviceName: string;
    code: string;
    expirationDate: string;
};
declare const Template: ({ deviceName, code, expirationDate, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ deviceName, code, expirationDate, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
