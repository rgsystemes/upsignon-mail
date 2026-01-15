import { Button, Link, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { formatRemainingTime } from '../../helpers/formatRemainingTime.js'
import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  adminImportLink: string
  loginPageLink: string
  expirationDate: Date
}

const Template = ({
  adminImportLink,
  loginPageLink,
  expirationDate,
  locale = 'fr',
}: Args & { locale: Locales }) => {
  const remainingTime = formatRemainingTime(expirationDate, locale)
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
          <FormattedMessage id="expiration" values={{ remainingTime }} />
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
  subject: (locale: Locales) => messages[locale].subject,
} as const

export default Template
