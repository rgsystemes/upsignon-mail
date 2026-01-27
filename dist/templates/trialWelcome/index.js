import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, Section, Text } from '@react-email/components';
import { QRCodeSVG } from 'qrcode.react';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ trialEndDate, activationLink, consoleLink, locale = 'fr', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title" }) }), _jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "content", values: {
                            trialEndDate: trialEndDate.toLocaleDateString(locale),
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "howToActivate", values: {
                            italic: (chunks) => _jsx("span", { style: { fontStyle: 'italic' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "howToActivateContent", values: {
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                            link: () => (_jsx(Link, { href: activationLink, className: "text-link-primary", children: activationLink })),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "qrCodeTitle" }) }), _jsx(Section, { className: "text-center", children: _jsx(QRCodeSVG, { value: activationLink }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "stepTitle" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "step1", values: {
                            link: (chunks) => (_jsx(Link, { href: consoleLink, className: "text-link-primary", children: chunks })),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "step2" }) }), _jsx(Text, { className: "text-base whitespace-pre-line", children: _jsx(FormattedMessage, { id: "contactContent" }) }), _jsx(Text, { className: "text-base whitespace-pre-line text-text-tertiary", children: _jsx(FormattedMessage, { id: "footer" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
