import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ bankName = '--', bankUrl = '--', locale = 'en', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title1" }) }), _jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title2" }) }), _jsx(Text, { className: "text-base whitespace-pre-line text-text-primary", children: _jsx(FormattedMessage, { id: "hello" }) }), _jsx(Text, { className: "text-base text-text-primary", children: _jsx(FormattedMessage, { id: "txt1", values: { bankName, bankUrl } }) }), _jsx(Text, { className: "text-base text-text-primary", children: _jsx(FormattedMessage, { id: "txt2" }) }), _jsx(Text, { className: "text-base text-text-primary", children: _jsx(FormattedMessage, { id: "txt3" }) }), _jsx(Text, { className: "text-base text-text-primary", children: _jsx(FormattedMessage, { id: "txt4" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
