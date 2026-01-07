import { render } from '@react-email/render'
import { type AnyMailConfig, type TemplateName, registry } from '@templates/index.js'

export const buildEmail = async <T extends TemplateName>(
  config: AnyMailConfig & { templateName: T },
) => {
  const { templateName, locales, args } = config
  const { Template } = registry[templateName]
  if (!Template) throw new Error(`Template ${templateName} not found`)

  // @ts-expect-error - Pas le choix :(
  return render(<Template {...(args as ComponentProps)} locale={locales} />)
}
