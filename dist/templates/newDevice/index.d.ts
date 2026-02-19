import { Locales } from '../index.js';
type Args = {
    deviceName: string;
    availableCodeDate: string;
    code: string;
    deviceType: string;
    deviceOSAndVersion: string;
};
declare const Template: ({ deviceName, availableCodeDate, code, deviceType, deviceOSAndVersion, locale, }: Args & {
    locale: Locales;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ deviceName, availableCodeDate, code, deviceType, deviceOSAndVersion, locale, }: Args & {
        locale: Locales;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
