import { Layout } from '@partials/layout/index.js'
import { Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import messages from './messages.json' with { type: 'json' }

type Args = {
  emailUser: string
}

const Template = ({ emailUser, locale = 'fr' }) => {
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage id="content" values={{ emailUser }} />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="stepTitle" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="step1" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="step2" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="step3" />
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
