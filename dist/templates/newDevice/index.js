import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
import { formatDateWithMonthName, formatTimeWithTimezone, } from '../../helpers/formatDateTime.js';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const Template = ({ deviceName = "Nom de l'Appareil", expirationDate = new Date(), code = 'AIOL-01234', deviceType = 'macOS', deviceOSAndVersion = 'OX13', locale = 'fr', ianaTimezone = 'Europe/Paris', }) => {
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content2", values: { deviceName, deviceType, deviceOSAndVersion } }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "content3" }) }), _jsx(Text, { className: "text-3xl font-bold text-center font-mono", children: code }), _jsx(Text, { className: "text-base font-bold text-center", children: _jsx(FormattedMessage, { id: "availableCode", values: {
                            expirationDate: formatDateWithMonthName(expirationDate, locale, ianaTimezone),
                            expirationTime: formatTimeWithTimezone(expirationDate, locale, ianaTimezone),
                        } }) }), _jsx(Text, { className: "text-base text-text-tertiary", children: _jsx(FormattedMessage, { id: "warning" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
