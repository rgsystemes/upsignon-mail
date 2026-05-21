import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Img, Link, Section, Text } from '@react-email/components';
import { FormattedMessage } from 'react-intl';
export const Footer = () => {
    return (_jsxs(Section, { className: "bg-septeo-primary p-8 text-center mt-20", children: [_jsx(Img, { src: "https://app.upsignon.eu/mails/logoFooter.png", alt: "Septeo", className: "mx-auto" }), _jsx(Text, { className: "text-white text-base", children: _jsx(FormattedMessage, { id: "footerContent" }) }), _jsx(Link, { href: "mailto:BS-SEPTEOITSOLUTIONS-Support@septeo.com", className: "text-white text-base underline", children: _jsx(FormattedMessage, { id: "footerLink" }) })] }));
};
