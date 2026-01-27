import { Locales } from '../index.js';
type Args = {
    trialEndDate: Date;
    activationLink: string;
    consoleLink: string;
};
declare const Template: ({ trialEndDate, activationLink, consoleLink, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ trialEndDate, activationLink, consoleLink, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
