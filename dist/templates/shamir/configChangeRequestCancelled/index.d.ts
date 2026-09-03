import { Locales } from '../../index.js';
type Args = {
    shamirConfigName: string;
    creatorEmail: string;
    bankName: string;
};
declare const Template: ({ creatorEmail, shamirConfigName, bankName, locale, }: Args & {
    locale: Locales;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
export declare const templateConfig: {
    readonly Template: ({ creatorEmail, shamirConfigName, bankName, locale, }: Args & {
        locale: Locales;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
