import { type AnyMailConfig, type TemplateName } from './templates/index.js';
export declare const buildEmail: <T extends TemplateName>(config: AnyMailConfig & {
    templateName: T;
}) => Promise<{
    html: string;
    text: string;
    subject: string;
}>;
export { getBestLanguage } from './helpers/getBestLanguage.js';
