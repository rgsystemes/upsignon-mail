import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Tailwind } from '@react-email/components';
import { Body } from '@react-email/components';
import { Head, Html } from '@react-email/components';
import { IntlProvider } from 'react-intl';
import trads from '../footer/messages.json' with { type: 'json' };
import { Footer, Header } from '../index.js';
import tailwindConfig from './tailwind.config.js';
export const Layout = ({ children, messages, locale }) => {
    const mergedMessages = {
        ...trads[locale],
        ...messages,
    };
    return (_jsxs(Html, { children: [_jsx(Head, {}), _jsx(IntlProvider, { messages: mergedMessages, locale: locale, children: _jsx(Tailwind, { config: tailwindConfig, children: _jsx(Body, { children: _jsxs(Container, { className: "bg-white", children: [_jsx(Header, {}), children, _jsx(Footer, {})] }) }) }) })] }));
};
