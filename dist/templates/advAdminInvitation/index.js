import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ consoleLink = 'default', expirationDate = new Date(), locale = 'fr', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "hello" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content2" }) }), _jsx(Button, { href: consoleLink, className: "text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center", children: _jsx(FormattedMessage, { id: "button" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "expiration", values: { expirationDate: expirationDate.toLocaleDateString(locale) } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer2" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
