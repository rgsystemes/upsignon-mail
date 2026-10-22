import { Locales } from '../../index.js';
type Args = {
    currentShamirConfigName: string;
    bankName: string;
};
declare const Template: ({ currentShamirConfigName, bankName, locale, }: Args & {
    locale: Locales;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
export declare const templateConfig: {
    readonly Template: ({ currentShamirConfigName, bankName, locale, }: Args & {
        locale: Locales;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
