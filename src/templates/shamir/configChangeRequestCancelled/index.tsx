import { Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../../_partials/layout/index.js'
import { Locales } from '../../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  shamirConfigName: string
  creatorEmail: string
  bankName: string
}

const Template = async ({
  creatorEmail = 'someone@septeo.com',
  shamirConfigName = 'Shamir N',
  bankName = 'TEST BANK',
  locale = 'fr',
}: Args & { locale: Locales }) => {
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-base">
          <FormattedMessage id="content1" />
        </Text>
        <Text className="text-base">
          <FormattedMessage
            id="bank"
            values={{
              bankName,
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage
            id="content2"
            values={{
              creatorEmail,
              shamirConfigName,
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content3" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content4" />
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
