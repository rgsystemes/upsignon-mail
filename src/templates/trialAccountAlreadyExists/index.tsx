import { Button, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  loginLink: string
}

const Template = ({
  loginLink = 'https://admin-pro.upsignon.eu/login.html',
  locale = 'fr',
}: Args & { locale: Locales }) => {
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
          <FormattedMessage id="content2" />
        </Text>

        <Button
          href={loginLink}
          className="text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center"
        >
          <FormattedMessage id="loginButton" />
        </Button>

        <Text className="text-base">
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
