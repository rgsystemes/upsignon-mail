import { templateConfig as masterPasswordResetAdminApproval } from './masterPasswordResetAdminApproval/index.js'
import { templateConfig as newDevice } from './newDevice/index.js'
import { templateConfig as newDeviceAdminApproval } from './newDeviceAdminApproval/index.js'
import { templateConfig as proAdminInvitation } from './proAdminInvitation/index.js'
import { templateConfig as resetPassword } from './resetPassword/index.js'
import { templateConfig as trialWelcome } from './trialWelcome/index.js'

export const registry = {
  masterPasswordResetAdminApproval,
  newDeviceAdminApproval,
  newDevice,
  proAdminInvitation,
  resetPassword,
  trialWelcome,
} as const

export type TemplateName = keyof typeof registry
export type TemplateArgs<T extends TemplateName> = (typeof registry)[T]['args']
export type Locales = 'fr' | 'en'

export type AnyMailConfig = {
  [T in TemplateName]: {
    templateName: T
    locales: Locales
    args: TemplateArgs<T>
  }
}[TemplateName]
