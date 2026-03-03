import { templateConfig as masterPasswordResetAdminApproval } from './masterPasswordResetAdminApproval/index.js';
import { templateConfig as newDevice } from './newDevice/index.js';
import { templateConfig as newDeviceAdminApproval } from './newDeviceAdminApproval/index.js';
import { templateConfig as proAdminInvitation } from './proAdminInvitation/index.js';
import { templateConfig as resetPassword } from './resetPassword/index.js';
import { templateConfig as configChangeRequestApproved } from './shamir/configChangeRequestApproved/index.js';
import { templateConfig as configChangeRequestAwaitingApproval } from './shamir/configChangeRequestAwaitingApproval/index.js';
import { templateConfig as configChangeRequestCancelled } from './shamir/configChangeRequestCancelled/index.js';
import { templateConfig as configChangeRequestRejected } from './shamir/configChangeRequestRejected/index.js';
import { templateConfig as recoveryRequestAwaitingApproval } from './shamir/recoveryRequestAwaitingApproval/index.js';
import { templateConfig as recoveryRequestCancelled } from './shamir/recoveryRequestCancelled/index.js';
import { templateConfig as recoveryRequestDenied } from './shamir/recoveryRequestDenied/index.js';
import { templateConfig as recoveryRequestExpired } from './shamir/recoveryRequestExpired/index.js';
import { templateConfig as recoveryRequestInitiated } from './shamir/recoveryRequestInitiated/index.js';
import { templateConfig as recoveryRequestReady } from './shamir/recoveryRequestReady/index.js';
import { templateConfig as shamirSecurityAlert } from './shamir/shamirSecurityAlert/index.js';
import { templateConfig as trialWelcome } from './trialWelcome/index.js';
export const registry = {
    masterPasswordResetAdminApproval,
    newDeviceAdminApproval,
    newDevice,
    proAdminInvitation,
    resetPassword,
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
};
