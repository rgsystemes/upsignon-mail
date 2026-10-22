import { Locales } from '../index.js';
type Args = {
    bankName: string;
    bankUrl: string;
    email: string;
    keyType: 'signing' | 'sharing';
};
declare const Template: ({ bankName, bankUrl, email, keyType, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ bankName, bankUrl, email, keyType, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
