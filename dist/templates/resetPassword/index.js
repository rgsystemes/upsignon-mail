import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { formatRemainingTime } from '../../helpers/formatRemainingTime.js';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ deviceName, code, expirationDate, locale = 'fr', }) => {
    const remainingTime = formatRemainingTime(new Date(expirationDate), locale);
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title" }) }), _jsx(Text, { className: "text-base whitespace-pre-line text-text-primary", children: _jsx(FormattedMessage, { id: "content", values: { deviceName } }) }), _jsx(Text, { className: "text-base text-text-primary", children: _jsx(FormattedMessage, { id: "codeTitle" }) }), _jsx(Text, { className: "text-3xl font-bold text-center", children: code }), _jsx(Text, { className: "text-base text-center text-text-secondary", children: _jsx(FormattedMessage, { id: "expiration", values: { deviceName, remainingTime } }) }), _jsx(Text, { className: "text-base text-text-primary", children: _jsx(FormattedMessage, { id: "footer" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
