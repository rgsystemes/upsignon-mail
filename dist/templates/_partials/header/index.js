import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Img, Section } from '@react-email/components';
export const Header = ({ hideImage }) => {
    return (_jsxs(Section, { className: "mb-6", children: [_jsx(Img, { src: "https://app.upsignon.eu/mails/logoHeader.png", alt: "Septeo", className: "mx-auto mb-6" }), !hideImage && (_jsx(Img, { src: "https://app.upsignon.eu/mails/nerd.png", alt: "Septeo", className: "w-full" }))] }));
};
