import { Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  deviceName: string
  availableCodeDate: string
  code: string
  deviceType: string
  deviceOSAndVersion: string
}

const Template = ({
  deviceName = '',
  availableCodeDate = '',
  code = '',
  deviceType = '',
  deviceOSAndVersion = '',
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
            values={{ deviceName, deviceType, deviceOSAndVersion }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content3" />
        </Text>
        <Text className="text-3xl font-bold text-center">{code}</Text>
        <Text className="text-base font-bold text-center">
          <FormattedMessage id="availableCode" values={{ availableCodeDate }} />
        </Text>
        <Text className="text-base text-text-tertiary">
          <FormattedMessage id="warning" />
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
