import { Layout } from '@partials/layout/index.js'
import { Link, Section, Text } from '@react-email/components'
import { Locales } from '@templates/index.js'
import { QRCodeSVG } from 'qrcode.react'
import { FormattedMessage } from 'react-intl'

import messages from './messages.json' with { type: 'json' }

type Args = {
  trialEndDate: string
  activationLink: string
  consoleLink: string
}

const Template = ({
  trialEndDate,
  activationLink,
  consoleLink,
  locale = 'fr',
}: Args & { locale: Locales }) => {
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage
            id="content"
            values={{
              trialEndDate,
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage
            id="howToActivate"
            values={{
              italic: (chunks) => <span style={{ fontStyle: 'italic' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage
            id="howToActivateContent"
            values={{
              activationLink,
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
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
          <FormattedMessage
            id="step1"
            values={{
              link: (chunks) => (
                <Link href={consoleLink} className="text-link-primary">
                  {chunks}
                </Link>
              ),
            }}
          />
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
  object: (locale: Locales) => messages[locale].object,
} as const

export default Template
