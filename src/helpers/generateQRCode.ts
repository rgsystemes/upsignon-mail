import QRCode from 'qrcode'

export const generateQRCode = async (
  text: string,
  options?: {
    width?: number
    margin?: number
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
  },
): Promise<string> => {
  return await QRCode.toDataURL(text, {
    width: options?.width || 200,
    margin: options?.margin || 2,
    errorCorrectionLevel: options?.errorCorrectionLevel || 'M',
  })
}
