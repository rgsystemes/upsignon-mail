export declare const registry: {
    readonly advAdminInvitation: {
        readonly Template: ({ consoleLink, expirationDate, locale, }: {
            consoleLink: string;
            expirationDate: Date;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            consoleLink: string;
            expirationDate: Date;
        };
        readonly subject: (locale: Locales) => string;
    };
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
    readonly proBankOpening: {
        readonly Template: ({ bankSetupUrl, consoleLink, userEmail, locale, }: {
            bankSetupUrl: string;
            consoleLink: string;
            userEmail: string;
        } & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            bankSetupUrl: string;
            consoleLink: string;
            userEmail: string;
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
    readonly trialExpiration: {
        readonly Template: ({ salesTrials, locale }: {
            salesTrials: {
                sales: string;
                expired: {
                    id: string;
                    name: string;
                    reseller: string;
                    nbUsers: number;
                    createdAt: string;
                    remainingDays: number;
                }[];
                next7Days: {
                    id: string;
                    name: string;
                    reseller: string;
                    nbUsers: number;
                    createdAt: string;
                    remainingDays: number;
                }[];
                next14Days: {
                    id: string;
                    name: string;
                    reseller: string;
                    nbUsers: number;
                    createdAt: string;
                    remainingDays: number;
                }[];
            }[];
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            salesTrials: {
                sales: string;
                expired: {
                    id: string;
                    name: string;
                    reseller: string;
                    nbUsers: number;
                    createdAt: string;
                    remainingDays: number;
                }[];
                next7Days: {
                    id: string;
                    name: string;
                    reseller: string;
                    nbUsers: number;
                    createdAt: string;
                    remainingDays: number;
                }[];
                next14Days: {
                    id: string;
                    name: string;
                    reseller: string;
                    nbUsers: number;
                    createdAt: string;
                    remainingDays: number;
                }[];
            }[];
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
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            trialEndDate: Date;
            activationLink: string;
            consoleLink: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly configChangeRequestApproved: {
        readonly Template: ({ nbApprovers, currentShamirConfigName, nextShamirConfigName, bankName, locale, }: {
            currentShamirConfigName: string;
            nextShamirConfigName: string;
            nbApprovers: number;
            bankName: string;
        } & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            currentShamirConfigName: string;
            nextShamirConfigName: string;
            nbApprovers: number;
            bankName: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly configChangeRequestAwaitingApproval: {
        readonly Template: ({ creatorEmail, shamirConfigName, minApprovers, bankName, locale, }: {
            creatorEmail: string;
            shamirConfigName: string;
            minApprovers: number;
            bankName: string;
        } & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            creatorEmail: string;
            shamirConfigName: string;
            minApprovers: number;
            bankName: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly configChangeRequestCancelled: {
        readonly Template: ({ creatorEmail, shamirConfigName, bankName, locale, }: {
            shamirConfigName: string;
            creatorEmail: string;
            bankName: string;
        } & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            shamirConfigName: string;
            creatorEmail: string;
            bankName: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly configChangeRequestRejected: {
        readonly Template: ({ currentShamirConfigName, bankName, locale, }: {
            currentShamirConfigName: string;
            bankName: string;
        } & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            currentShamirConfigName: string;
            bankName: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly recoveryRequestAwaitingApproval: {
        readonly Template: ({ vaultEmail, expiryDate, requestDate, deviceName, deviceType, locale, }: {
            vaultEmail: string;
            expiryDate: Date;
            requestDate: Date;
            deviceName: string;
            deviceType: string;
        } & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            vaultEmail: string;
            expiryDate: Date;
            requestDate: Date;
            deviceName: string;
            deviceType: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly recoveryRequestCancelled: {
        readonly Template: ({ vaultEmail, locale, }: {
            vaultEmail: string;
        } & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: {
            vaultEmail: string;
        };
        readonly subject: (locale: Locales) => string;
    };
    readonly recoveryRequestDenied: {
        readonly Template: ({ locale }: object & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: object;
        readonly subject: (locale: Locales) => string;
    };
    readonly recoveryRequestExpired: {
        readonly Template: ({ locale }: object & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: object;
        readonly subject: (locale: Locales) => string;
    };
    readonly recoveryRequestInitiated: {
        readonly Template: ({ locale }: object & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: object;
        readonly subject: (locale: Locales) => string;
    };
    readonly recoveryRequestReady: {
        readonly Template: ({ locale }: object & {
            locale: Locales;
        }) => Promise<import("react/jsx-runtime").JSX.Element>;
        readonly args: object;
        readonly subject: (locale: Locales) => string;
    };
    readonly shamirSecurityAlert: {
        readonly Template: ({ bankName, bankUrl, locale, }: {
            bankName: string;
            bankUrl: string;
        } & {
            locale: Locales;
        }) => import("react/jsx-runtime").JSX.Element;
        readonly args: {
            bankName: string;
            bankUrl: string;
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
