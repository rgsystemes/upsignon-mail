import { Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../../_partials/layout/index.js'
import { Locales } from '../../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  currentShamirConfigName: string
  nextShamirConfigName: string
  nbApprovers: number
}

const Template = async ({
  nbApprovers = 2,
  currentShamirConfigName = 'Shamir 1',
  nextShamirConfigName = 'Shamir 2',
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
            id="content2"
            values={{
              currentShamirConfigName,
              nbApprovers,
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base font-bold">
          <FormattedMessage
            id="content3"
            values={{
              nextShamirConfigName,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage
            id="content4"
            values={{
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content5" />
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
