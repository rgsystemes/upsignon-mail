import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = async ({ currentShamirConfigName = 'Shamir 1', bankName = 'TEST BANK', locale = 'fr', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "bank", values: {
                            bankName,
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content2", values: {
                            currentShamirConfigName,
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content3" }) }), _jsx(Text, { className: "text-base font-bold", children: _jsx(FormattedMessage, { id: "content4" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content5" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
