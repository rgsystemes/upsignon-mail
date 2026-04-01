import QRCode from 'qrcode';
export const generateQRCode = async (text, options) => {
    return await QRCode.toDataURL(text, {
        width: options?.width || 200,
        margin: options?.margin || 2,
        errorCorrectionLevel: options?.errorCorrectionLevel || 'M',
    });
};
