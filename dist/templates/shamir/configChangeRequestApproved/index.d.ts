import { Locales } from '../../index.js';
type Args = {
    currentShamirConfigName: string;
    nextShamirConfigName: string;
    nbApprovers: number;
    bankName: string;
};
declare const Template: ({ nbApprovers, currentShamirConfigName, nextShamirConfigName, bankName, locale, }: Args & {
    locale: Locales;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
export declare const templateConfig: {
    readonly Template: ({ nbApprovers, currentShamirConfigName, nextShamirConfigName, bankName, locale, }: Args & {
        locale: Locales;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
