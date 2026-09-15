import { Button, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  emailValidationLink: string
}

const Template = async ({
  emailValidationLink = 'https://admin-pro.upsignon.eu/trial-request-confirm',
  locale = 'fr',
}: Args & { locale: Locales }) => {
  return (
    <Layout messages={messages[locale]} locale={locale} hideHeaderImage>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content1" />
        </Text>

        <Button
          href={emailValidationLink}
          className="text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center"
        >
          <FormattedMessage id="activateButton" />
        </Button>
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
