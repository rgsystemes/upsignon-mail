import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = async ({ emailValidationLink = 'https://admin-pro.upsignon.eu/trial-request-confirm', locale = 'fr', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, hideHeaderImage: true, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsxs(Button, { href: emailValidationLink, className: "text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center", children: ["\u00A0\u00A0\u00A0\u00A0", _jsx(FormattedMessage, { id: "activateButton" }), "\u00A0\u00A0\u00A0\u00A0"] }), _jsx("br", {}), _jsx("br", {})] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
