import { Layout } from '@partials/layout/index.js'
import { Link, Section, Text } from '@react-email/components'
import { QRCodeSVG } from 'qrcode.react'
import { FormattedMessage } from 'react-intl'

import messages from './messages.json' with { type: 'json' }

type Args = {
  trialEndDate: string
  activationLink: string
  consoleLink: string
}

const Template = ({ trialEndDate, activationLink, consoleLink, locale = 'fr' }) => {
  return (
    <Layout messages={messages[locale]} locale>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage id="content" values={{ trialEndDate }} />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="howToActivate" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage id="howToActivateContent" values={{ activationLink }} />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="qrCodeTitle" />
        </Text>
        <Section className="text-center">
          <QRCodeSVG value={activationLink} />
        </Section>
        <Text className="text-base">
          <FormattedMessage id="stepTitle" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="step1" />
          <Link href={consoleLink} className="text-link-primary">
            <FormattedMessage id="ici" />
          </Link>
        </Text>
        <Text className="text-base">
          <FormattedMessage id="step2" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage id="contactContent" />
        </Text>
        <Text className="text-base whitespace-pre-line text-text-tertiary">
          <FormattedMessage id="footer" />
        </Text>
      </Section>
    </Layout>
  )
}

export const templateConfig = {
  Template,
  args: {} as Args,
} as const

export default Template
