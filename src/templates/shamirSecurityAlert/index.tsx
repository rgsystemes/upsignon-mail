import { Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  bankName: string
  bankUrl: string
}

const Template = ({
  bankName = '--',
  bankUrl = '--',
  locale = 'en',
}: Args & { locale: Locales }) => {
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title1" />
        </Text>
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title2" />
        </Text>
        <Text className="text-base whitespace-pre-line text-text-primary">
          <FormattedMessage id="hello" />
        </Text>
        <Text className="text-base text-text-primary">
          <FormattedMessage id="txt1" values={{ bankName, bankUrl }} />
        </Text>
        <Text className="text-base text-text-primary">
          <FormattedMessage id="txt2" />
        </Text>
        <Text className="text-base text-text-primary">
          <FormattedMessage id="txt3" />
        </Text>
        <Text className="text-base text-text-primary">
          <FormattedMessage id="txt4" />
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
