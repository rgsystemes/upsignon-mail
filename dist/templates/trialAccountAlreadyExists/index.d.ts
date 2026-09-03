import { Locales } from '../index.js';
type Args = {
    loginLink: string;
};
declare const Template: ({ loginLink, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ loginLink, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
