import { Locales } from '../index.js';
type Args = {
    emailValidationLink: string;
};
declare const Template: ({ emailValidationLink, locale, }: Args & {
    locale: Locales;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
export declare const templateConfig: {
    readonly Template: ({ emailValidationLink, locale, }: Args & {
        locale: Locales;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
