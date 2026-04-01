import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from '@react-email/components';
import { useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../_partials/layout/index.js';
import messages from './messages.json' with { type: 'json' };
const TrialsTable = ({ trials, expiredCase, locale, }) => {
    const intl = useIntl();
    return (_jsxs("table", { style: {
            borderCollapse: 'collapse',
            width: '100%',
            borderBottom: '2px solid black',
        }, children: [_jsx("thead", { children: _jsx("tr", { children: [
                        'colId',
                        'colName',
                        'colReseller',
                        'colNbUsers',
                        'colCreatedAt',
                        expiredCase ? 'colExpiredDays' : 'colRemainingDays',
                    ].map((col) => (_jsx("th", { style: { padding: '8px' }, children: intl.formatMessage({ id: col }) }, col))) }) }), _jsx("tbody", { children: [...trials]
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((trial, i) => (_jsxs("tr", { style: { background: i % 2 === 0 ? '#E7E7E7' : '#fff' }, children: [_jsx("td", { style: { padding: '8px', textAlign: 'center' }, children: trial.id }), _jsx("td", { style: { padding: '8px', textAlign: 'center' }, children: trial.name }), _jsx("td", { style: { padding: '8px', textAlign: 'center' }, children: trial.reseller }), _jsx("td", { style: { padding: '8px', textAlign: 'center' }, children: trial.nbUsers }), _jsx("td", { style: { padding: '8px', textAlign: 'center' }, children: new Date(trial.createdAt).toLocaleDateString(locale) }), _jsx("td", { style: {
                                padding: '8px',
                                textAlign: 'center',
                                ...(expiredCase ? { color: 'red' } : {}),
                            }, children: trial.remainingDays })] }, trial.id))) })] }));
};
const SalesSection = ({ salesTrials, locale, }) => {
    const intl = useIntl();
    const salesName = salesTrials.sales
        ? salesTrials.sales.replace('@septeo.com', '')
        : intl.formatMessage({ id: 'unassigned' });
    return (_jsxs("div", { children: [_jsx("h3", { children: salesName }), salesTrials.expired.length > 0 && (_jsxs("div", { children: [_jsx("span", { children: intl.formatMessage({ id: 'sectionExpired' }) }), _jsx(TrialsTable, { trials: salesTrials.expired, expiredCase: true, locale: locale }), _jsx("br", {})] })), salesTrials.next7Days.length > 0 && (_jsxs("div", { children: [_jsx("span", { children: intl.formatMessage({ id: 'section7Days' }) }), _jsx(TrialsTable, { trials: salesTrials.next7Days, locale: locale }), _jsx("br", {})] })), salesTrials.next14Days.length > 0 && (_jsxs("div", { children: [_jsx("span", { children: intl.formatMessage({ id: 'section14Days' }) }), _jsx(TrialsTable, { trials: salesTrials.next14Days, locale: locale }), _jsx("br", {})] }))] }));
};
const Template = ({ salesTrials = [], locale = 'fr' }) => {
    const sorted = [...salesTrials].sort((a, b) => (a.sales < b.sales ? -1 : 1));
    return (_jsx(Layout, { messages: messages[locale], locale: locale, children: _jsxs(Section, { className: "text-text-primary px-4", children: [_jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "hello" }) }), sorted.map((salesTrials) => (_jsx(SalesSection, { salesTrials: salesTrials, locale: locale }, salesTrials.sales))), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer1" }) }), _jsx(Text, { className: "text-base", children: _jsx(FormattedMessage, { id: "footer2" }) })] }) }));
};
export const templateConfig = {
    Template,
    args: {},
    subject: (locale) => messages[locale].subject,
};
export default Template;
