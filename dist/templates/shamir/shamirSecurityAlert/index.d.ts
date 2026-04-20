import { Locales } from '../../index.js';
type Args = {
    bankName: string;
    bankUrl: string;
};
declare const Template: ({ bankName, bankUrl, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ bankName, bankUrl, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
