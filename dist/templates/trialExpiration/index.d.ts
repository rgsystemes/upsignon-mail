import { Locales } from '../index.js';
type Trial = {
    id: string;
    name: string;
    reseller: string;
    nbUsers: number;
    createdAt: string;
    remainingDays: number;
};
type SalesTrials = {
    sales: string;
    expired: Trial[];
    next7Days: Trial[];
    next14Days: Trial[];
};
type Args = {
    salesTrials: SalesTrials[];
};
declare const Template: ({ salesTrials, locale }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ salesTrials, locale }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
