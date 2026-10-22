import { ReactNode } from 'react';
import { Locales } from '../../index.js';
type TLayoutProps = {
    children: ReactNode;
    messages: {
        [tradKey: string]: string;
    };
    locale: Locales;
    hideHeaderImage?: boolean;
};
export declare const Layout: ({ children, messages, locale, hideHeaderImage }: TLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
