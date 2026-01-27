import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ emailUser, locale = 'fr' }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title" }) }), _jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "content", values: {
                            emailUser,
                            italic: (chunks) => _jsx("span", { style: { fontStyle: 'italic' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "stepTitle" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "step1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "step2" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "step3" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
