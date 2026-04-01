import { Locales } from '../../index.js';
type Args = {
    vaultEmail: string;
    expiryDate: Date;
    requestDate: Date;
    deviceName: string;
    deviceType: string;
};
declare const Template: ({ vaultEmail, expiryDate, requestDate, deviceName, deviceType, locale, }: Args & {
    locale: Locales;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
export declare const templateConfig: {
    readonly Template: ({ vaultEmail, expiryDate, requestDate, deviceName, deviceType, locale, }: Args & {
        locale: Locales;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    readonly args: Args;
    readonly subject: (locale: Locales) => string;
};
export default Template;
