import { Locales } from '../index.js';
type Args = {
    deviceName: string;
    expirationDate: Date;
    code: string;
    deviceType: string;
    deviceOSAndVersion: string;
};
declare const Template: ({ deviceName, expirationDate, code, deviceType, deviceOSAndVersion, locale, ianaTimezone, }: Args & {
    locale: Locales;
    ianaTimezone?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const templateConfig: {
    readonly Template: ({ deviceName, expirationDate, code, deviceType, deviceOSAndVersion, locale, ianaTimezone, }: Args & {
        locale: Locales;
        ianaTimezone?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
