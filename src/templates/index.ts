import { templateConfig as masterPasswordSupport } from '#/templates/masterPasswordResetAdminApproval/index.js'
import { templateConfig as newDeviceAdminApproval } from '#/templates/newDeviceAdminApproval/index.js'
import { templateConfig as newDevice } from '@templates/newDevice/index.js'
import { templateConfig as proAdminInvitation } from '@templates/proAdminInvitation/index.js'
import { templateConfig as resetPassword } from '@templates/resetPassword/index.js'
import { templateConfig as trialWelcome } from '@templates/trialWelcome/index.js'

export const registry = {
  masterPasswordSupport,
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
