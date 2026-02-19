import { Img, Link, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { generateQRCode } from '../../helpers/generateQRCode.js'
import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  trialEndDate: Date
  activationLink: string
  consoleLink: string
}

const Template = async ({
  trialEndDate = new Date(),
  activationLink = 'default',
  consoleLink = '',
  locale = 'fr',
}: Args & { locale: Locales }) => {
  const qrCodeDataUrl = await generateQRCode(activationLink)
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content1" />
        </Text>
        <Text className="text-base">
          <FormattedMessage
            id="content2"
            values={{
              trialEndDate: trialEndDate.toLocaleDateString(locale),
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
        <Text className="text-base">
          <FormattedMessage
            id="howToActivateContent"
            values={{
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
              link: () => (
                <Link href={activationLink} className="text-link-primary">
                  {activationLink}
                </Link>
              ),
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="qrCodeTitle" />
        </Text>
        <Img
          src={qrCodeDataUrl}
          alt="QR Code"
          width="200"
          height="200"
          style={{ display: 'block', margin: '0 auto' }}
        />
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
        <Text className="text-base">
          <FormattedMessage id="contactContent1" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="contactContent2" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="footer1" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="footer2" />
        </Text>
      </Section>
    </Layout>
  )
}

export const templateConfig = {
  Template,
  args: {} as Args,
  subject: (locale: Locales) => messages[locale].subject,
} as const

export default Template
