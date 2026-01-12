import { Layout } from '@partials/layout/index.js'
import { Button, Link, Section, Text } from '@react-email/components'
import { Locales } from '@templates/index.js'
import { FormattedMessage } from 'react-intl'

import messages from './messages.json' with { type: 'json' }

type Args = {
  adminImportLink: string
  loginPageLink: string
}

const Template = ({
  adminImportLink,
  loginPageLink,
  locale = 'fr',
}: Args & { locale: Locales }) => {
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-xl font-bold text-center">
          <FormattedMessage id="title" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage id="content" />
        </Text>
        <Button
          href={adminImportLink}
          className="text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center"
        >
          <FormattedMessage id="button" />
        </Button>
        <Text className="text-base text-center text-text-secondary">
          <FormattedMessage id="expiration" />
        </Text>
        <Text className="text-base text-center text-text-tertiary">
          <FormattedMessage
            id="linkTitle"
            values={{
              link: (chunks) => (
                <Link href={loginPageLink} className="text-link-primary">
                  {chunks}
                </Link>
              ),
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="stepTitle" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage
            id="step1"
            values={{
              link: (chunks) => (
                <Link href="https://upsignon.eu/downloads" className="text-link-primary">
                  {chunks}
                </Link>
              ),
            }}
          />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage id="step2" />
        </Text>
        <Text className="text-base text-text-tertiary">
          <FormattedMessage id="footer" />
        </Text>
      </Section>
    </Layout>
  )
}

export const templateConfig = {
  Template,
  args: {} as Args,
  object: (locale: Locales) => messages[locale].object,
} as const

export default Template
