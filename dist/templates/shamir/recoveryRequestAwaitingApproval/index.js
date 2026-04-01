import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = async ({ vaultEmail = 'someone@septeo.com', expiryDate = new Date(Date.now() + 6 * 24 * 3600 * 1000), requestDate = new Date(), deviceName = '[Device name]', deviceType = '[Device type]', locale = 'fr', }) => {
    const remainingDays = (expiryDate.getTime() - requestDate.getTime()) / (1000 * 24 * 3600);
    const dateFormatter = Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsxs(Text, { className: "text-base", children: [_jsx(FormattedMessage, { id: "content2a" }), _jsx("br", {}), _jsx(FormattedMessage, { id: "content2b", values: {
                                bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                            } })] }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content3", values: {
                            vaultEmail,
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Section, { className: "bg-[#C6D5FF] rounded-md py-2 px-2", children: _jsx(Text, { className: "text-base text-[#2E3862] p-0 m-0 uppercase font-bold", children: _jsx(FormattedMessage, { id: "content4", values: {
                                remainingDays,
                                expiryDate: dateFormatter.format(expiryDate),
                            } }) }) }), _jsxs(Text, { className: "text-base text-[#586081] text-sm", children: [_jsx(FormattedMessage, { id: "content5", values: {
                                requestDate: dateFormatter.format(requestDate),
                                em: (chunks) => _jsx("em", { children: chunks }),
                            } }), _jsx("br", {}), _jsx(FormattedMessage, { id: "content6", values: {
                                deviceName,
                                deviceType,
                                em: (chunks) => _jsx("em", { children: chunks }),
                            } })] }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content7", values: {
                            bold: (chunks) => _jsx("span", { style: { fontWeight: 'bold' }, children: chunks }),
                        } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content8" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content9" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content10" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
