import { Locales } from '../../index.js';
type Args = {
    creatorEmail: string;
    shamirConfigName: string;
    minApprovers: number;
    bankName: string;
};
declare const Template: ({ creatorEmail, shamirConfigName, minApprovers, bankName, locale, }: Args & {
    locale: Locales;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
export declare const templateConfig: {
    readonly Template: ({ creatorEmail, shamirConfigName, minApprovers, bankName, locale, }: Args & {
        locale: Locales;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
