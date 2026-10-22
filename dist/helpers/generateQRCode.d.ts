export declare const generateQRCode: (text: string, options?: {
    width?: number;
    margin?: number;
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
}) => Promise<string>;
