import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Img, Link, Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { generateQRCode } from '../../helpers/generateQRCode.js';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = async ({ trialEndDate = new Date(), activationLink = 'default', consoleLink = '', locale = 'fr', }) => {
    const qrCodeDataUrl = await generateQRCode(activationLink);
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-xl font-bold text-center", children: _jsx(FormattedMessage, { id: "title" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content2", values: {
                            trialEndDate: trialEndDate.toLocaleDateString(locale),
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "howToActivate", values: {
                            italic: (chunks) => _jsx("span", { style: { fontStyle: 'italic' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "howToActivateContent", values: {
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                            link: () => (_jsx(Link, { href: activationLink, className: "text-link-primary", children: activationLink })),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "qrCodeTitle" }) }), _jsx(Img, { src: qrCodeDataUrl, alt: "QR Code", width: "200", height: "200", style: { display: 'block', margin: '0 auto' } }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "stepTitle" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "step1", values: {
                            link: (chunks) => (_jsx(Link, { href: consoleLink, className: "text-link-primary", children: chunks })),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "step2" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "contactContent1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "contactContent2" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer2" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
