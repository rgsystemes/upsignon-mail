import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Link, Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { formatRemainingTime } from '../../helpers/formatRemainingTime.js';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ adminImportLink, loginPageLink, expirationDate, locale = 'fr', }) => {
    const remainingTime = formatRemainingTime(expirationDate, locale);
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title" }) }), _jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "content" }) }), _jsx(Button, { href: adminImportLink, className: "text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center", children: _jsx(FormattedMessage, { id: "button" }) }), _jsx(Text, { className: "text-base text-center text-text-secondary", children: _jsx(FormattedMessage, { id: "expiration", values: { remainingTime } }) }), _jsx(Text, { className: "text-base text-center text-text-tertiary", children: _jsx(FormattedMessage, { id: "linkTitle", values: {
                            link: (chunks) => (_jsx(Link, { href: loginPageLink, className: "text-link-primary", children: chunks })),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "stepTitle" }) }), _jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "step1", values: {
                            link: (chunks) => (_jsx(Link, { href: "https://upsignon.eu/downloads", className: "text-link-primary", children: chunks })),
                        } }) }), _jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "step2" }) }), _jsx(Text, { className: "text-base text-text-tertiary", children: _jsx(FormattedMessage, { id: "footer" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
