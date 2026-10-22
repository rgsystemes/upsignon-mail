import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Column, Row, Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ bankName = '--', bankUrl = '--', email = '--', keyType = 'sharing', locale = 'fr', }) => {
    const keyTypeTranslation = keyType === 'sharing'
        ? messages[locale].key_type_sharing
        : messages[locale].key_type_signing;
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-0 max-w-2xl mx-auto", children: [_jsxs(Text, { className: "text-lg font-bold text-[#111] text-left mb-0", children: [_jsxs("span", { className: "text-[#E53E3E] mr-1", children: [_jsx(FormattedMessage, { id: "title1" }), " :"] }), _jsx(FormattedMessage, { id: "title2", values: {
                                keyType: keyTypeTranslation,
                            } })] }), _jsx(Text, { className: "text-base text-text-primary mt-4 mb-2", children: _jsx(FormattedMessage, { id: "txt1", values: {
                            bankName,
                            bankUrl,
                            email,
                            keyType: keyTypeTranslation,
                        } }) }), _jsx(Section, { className: "border border-[#E53E3E] bg-[#FFF5F5] rounded-md p-4 my-4 flex flex-row items-start", children: _jsxs(Row, { children: [_jsx(Column, { children: _jsx("div", { className: "rounded-full bg-[#FED7D7] w-[36px] h-[36px]", children: _jsx("div", { style: { color: '#63171B', fontSize: 22, textAlign: 'center' }, children: "\u26A0" }) }) }), _jsx(Column, { children: _jsx(Text, { className: "text-base text-[#9B2C2C] m-0 ml-3", children: _jsx(FormattedMessage, { id: "txt2" }) }) })] }) }), _jsx(Section, { className: "flex flex-row items-center mb-2", children: _jsxs(Text, { className: "text-base text-text-primary m-0", children: [_jsx("span", { style: { fontSize: 18, marginRight: 8, color: '#6B7280' }, children: "\uD83D\uDCCE" }), _jsx(FormattedMessage, { id: "txt3" })] }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
