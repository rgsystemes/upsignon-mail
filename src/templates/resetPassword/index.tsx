import { Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { formatRemainingTime } from '../../helpers/formatRemainingTime.js'
import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  deviceName: string
  code: string
  expirationDate: string
}

const Template = ({
  deviceName,
  code,
  expirationDate,
  locale = 'fr',
}: Args & { locale: Locales }) => {
  const remainingTime = formatRemainingTime(new Date(expirationDate), locale)
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title" />
        </Text>
        <Text className="text-base whitespace-pre-line text-text-primary">
          <FormattedMessage id="content" values={{ deviceName }} />
        </Text>
        <Text className="text-base text-text-primary">
          <FormattedMessage id="codeTitle" />
        </Text>
        <Text className="text-3xl font-bold text-center">{code}</Text>
        <Text className="text-base text-center text-text-secondary">
          <FormattedMessage id="expiration" values={{ deviceName, remainingTime }} />
        </Text>
        <Text className="text-base text-text-primary">
          <FormattedMessage id="footer" />
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
