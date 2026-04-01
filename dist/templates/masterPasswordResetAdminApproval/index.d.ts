import { Locales } from '../index.js';
type Args = {
    emailUser: string;
};
declare const Template: ({ emailUser, locale }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ emailUser, locale }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
