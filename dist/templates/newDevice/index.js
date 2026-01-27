import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ deviceName, availableCodeDate, code, deviceType, deviceOSAndVersion, locale = 'fr', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "content", values: { deviceName, deviceType, deviceOSAndVersion } }) }), _jsx(Text, { className: "text-3xl font-bold text-center", children: code }), _jsx(Text, { className: "text-base text-center", children: _jsx(FormattedMessage, { id: "availableCode", values: { availableCodeDate } }) }), _jsx(Text, { className: "text-base text-text-tertiary", children: _jsx(FormattedMessage, { id: "warning" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
