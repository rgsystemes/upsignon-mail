import { templateConfig as advAdminInvitation } from './advAdminInvitation/index.js'
import { templateConfig as masterPasswordResetAdminApproval } from './masterPasswordResetAdminApproval/index.js'
import { templateConfig as newDevice } from './newDevice/index.js'
import { templateConfig as newDeviceAdminApproval } from './newDeviceAdminApproval/index.js'
import { templateConfig as proAdminInvitation } from './proAdminInvitation/index.js'
import { templateConfig as proBankOpening } from './proBankOpening/index.js'
import { templateConfig as resetPassword } from './resetPassword/index.js'
import { templateConfig as configChangeRequestApproved } from './shamir/configChangeRequestApproved/index.js'
import { templateConfig as configChangeRequestAwaitingApproval } from './shamir/configChangeRequestAwaitingApproval/index.js'
import { templateConfig as configChangeRequestCancelled } from './shamir/configChangeRequestCancelled/index.js'
import { templateConfig as configChangeRequestRejected } from './shamir/configChangeRequestRejected/index.js'
import { templateConfig as recoveryRequestAwaitingApproval } from './shamir/recoveryRequestAwaitingApproval/index.js'
import { templateConfig as recoveryRequestCancelled } from './shamir/recoveryRequestCancelled/index.js'
import { templateConfig as recoveryRequestDenied } from './shamir/recoveryRequestDenied/index.js'
import { templateConfig as recoveryRequestExpired } from './shamir/recoveryRequestExpired/index.js'
import { templateConfig as recoveryRequestInitiated } from './shamir/recoveryRequestInitiated/index.js'
import { templateConfig as recoveryRequestReady } from './shamir/recoveryRequestReady/index.js'
import { templateConfig as shamirSecurityAlert } from './shamir/shamirSecurityAlert/index.js'
import { templateConfig as trialExpiration } from './trialExpiration/index.js'
import { templateConfig as trialWelcome } from './trialWelcome/index.js'
import { templateConfig as vaultPublicKeysSecurityAlert } from './vaultPublicKeysSecurityAlert/index.js'

export const registry = {
  advAdminInvitation,
  masterPasswordResetAdminApproval,
  newDeviceAdminApproval,
  newDevice,
  proAdminInvitation,
  proBankOpening,
  resetPassword,
  trialExpiration,
  trialWelcome,
  configChangeRequestApproved,
  configChangeRequestAwaitingApproval,
  configChangeRequestCancelled,
  configChangeRequestRejected,
  recoveryRequestAwaitingApproval,
  recoveryRequestCancelled,
  recoveryRequestDenied,
  recoveryRequestExpired,
  recoveryRequestInitiated,
  recoveryRequestReady,
  shamirSecurityAlert,
  vaultPublicKeysSecurityAlert,
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
