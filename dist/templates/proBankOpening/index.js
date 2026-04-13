import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Img, Link, Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { generateQRCode } from '../../helpers/generateQRCode.js';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = async ({ bankSetupUrl = 'default', consoleLink = '', userEmail = '', locale = 'fr', }) => {
    const qrCodeDataUrl = await generateQRCode(bankSetupUrl);
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "hello" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsx(Text, { className: "text-base font-semibold", children: _jsx(FormattedMessage, { id: "step1Title" }) }), _jsxs("ul", { className: "text-base", children: [_jsx("li", { children: _jsx(FormattedMessage, { id: "step1Link", values: {
                                    link: (chunks) => (_jsx(Link, { href: bankSetupUrl, className: "text-link-primary", children: chunks })),
                                } }) }), _jsx("li", { children: _jsx(FormattedMessage, { id: "step1QrCode" }) })] }), _jsx(Img, { src: qrCodeDataUrl, alt: "QR Code", width: "200", height: "200", style: { display: 'block', margin: '0 auto' } }), _jsx(Text, { className: "text-base font-semibold", children: _jsx(FormattedMessage, { id: "step2Title" }) }), _jsx("ul", { className: "text-base", children: _jsx("li", { children: _jsx(FormattedMessage, { id: "step2Content", values: {
                                userEmail,
                                bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                            } }) }) }), _jsx(Button, { href: consoleLink, className: "text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center", children: _jsx(FormattedMessage, { id: "button" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "support", values: {
                            link: (chunks) => (_jsx(Link, { href: "mailto:BS-SEPTEOITSOLUTIONS-Support@septeo.com", className: "text-link-primary", children: chunks })),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer2" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
