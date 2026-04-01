import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = async ({ vaultEmail = 'someone@septeo.com', locale = 'fr', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content2", values: {
                            vaultEmail,
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content3", values: {
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content4" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
