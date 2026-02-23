import { ReactNode } from 'react';
import { Locales } from 'src/templates/index.js';
type TLayoutProps = {
    children: ReactNode;
    messages: {
        [tradKey: string]: string;
    };
    locale: Locales;
};
export declare const Layout: ({ children, messages, locale }: TLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
