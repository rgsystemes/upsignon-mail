export declare const registry: {
    readonly masterPasswordResetAdminApproval: {
        readonly Template: ({ emailUser, locale }: {
            emailUser: string;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            emailUser: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly newDeviceAdminApproval: {
        readonly Template: ({ emailUser, locale }: {
            emailUser: string;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            emailUser: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly newDevice: {
        readonly Template: ({ deviceName, availableCodeDate, code, deviceType, deviceOSAndVersion, locale, }: {
            deviceName: string;
            availableCodeDate: string;
            code: string;
            deviceType: string;
            deviceOSAndVersion: string;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            deviceName: string;
            availableCodeDate: string;
            code: string;
            deviceType: string;
            deviceOSAndVersion: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly proAdminInvitation: {
        readonly Template: ({ adminImportLink, loginPageLink, expirationDate, locale, }: {
            adminImportLink: string;
            loginPageLink: string;
            expirationDate: Date;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            adminImportLink: string;
            loginPageLink: string;
            expirationDate: Date;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly resetPassword: {
        readonly Template: ({ deviceName, code, expirationDate, locale, }: {
            deviceName: string;
            code: string;
            expirationDate: string;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            deviceName: string;
            code: string;
            expirationDate: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly trialWelcome: {
        readonly Template: ({ trialEndDate, activationLink, consoleLink, locale, }: {
            trialEndDate: Date;
            activationLink: string;
            consoleLink: string;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            trialEndDate: Date;
            activationLink: string;
            consoleLink: string;
        };
        readonly subject: (locale: Locales) => string;
    };
};
export type TemplateName = keyof typeof registry;
export type TemplateArgs<T extends TemplateName> = (typeof registry)[T]['args'];
export type Locales = 'fr' | 'en';
export type AnyMailConfig = {
    [T in TemplateName]: {
        templateName: T;
        locales: Locales;
        args: TemplateArgs<T>;
    };
}[TemplateName];
