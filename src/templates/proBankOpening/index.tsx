import { Button, Img, Link, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { generateQRCode } from '../../helpers/generateQRCode.js'
import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  activationLink: string
  consoleLink: string
  userEmail: string
}

const Template = async ({
  activationLink = 'default',
  consoleLink = '',
  userEmail = '',
  locale = 'fr',
}: Args & { locale: Locales }) => {
  const qrCodeDataUrl = await generateQRCode(activationLink)
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-base">
          <FormattedMessage id="hello" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content1" />
        </Text>
        <Text className="text-base font-semibold">
          <FormattedMessage id="step1Title" />
        </Text>
        <ul className="text-base">
          <li>
            <FormattedMessage
              id="step1Link"
              values={{
                link: (chunks) => (
                  <Link href={activationLink} className="text-link-primary">
                    {chunks}
                  </Link>
                ),
              }}
            />
          </li>
          <li>
            <FormattedMessage id="step1QrCode" />
          </li>
        </ul>
        <Img
          src={qrCodeDataUrl}
          alt="QR Code"
          width="200"
          height="200"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <Text className="text-base font-semibold">
          <FormattedMessage id="step2Title" />
        </Text>
        <ul className="text-base">
          <li>
            <FormattedMessage
              id="step2Content"
              values={{
                userEmail,
                bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
              }}
            />
          </li>
        </ul>
        <Button
          href={consoleLink}
          className="text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center"
        >
          <FormattedMessage id="button" />
        </Button>
        <Text className="text-base">
          <FormattedMessage
            id="support"
            values={{
              link: (chunks) => (
                <Link
                  href="mailto:BS-SEPTEOITSOLUTIONS-Support@septeo.com"
                  className="text-link-primary"
                >
                  {chunks}
                </Link>
              ),
            }}
          />
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
