import { render, toPlainText } from '@react-email/render'

import { type AnyMailConfig, type TemplateName, registry } from './templates/index.js'

export const buildEmail = async <T extends TemplateName>(
  config: AnyMailConfig & { templateName: T },
): Promise<{ html: string; text: string; subject: string }> => {
  const { templateName, locales, args } = config
  const template = registry[templateName]
  const { Template, subject } = template
  if (!Template) throw new Error(`Template ${templateName} not found`)

  // @ts-expect-error - Pas le choix :(
  const html = await render(<Template {...args} locale={locales} />)
  const text = toPlainText(html)

  return { html, text, subject: subject(locales) }
}

export { getBestLanguage } from './helpers/getBestLanguage.js'
