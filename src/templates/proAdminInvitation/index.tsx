import { Layout } from '@partials/layout/index.js'
import { Button, Link, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import messages from './messages.json' with { type: 'json' }

type Args = {
  accessLink: string
  configurationLink: string
}

const Template = ({ accessLink, configurationLink, locale = 'fr' }) => {
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
          href={accessLink}
          className="text-base bg-button-primary text-white font-semibold py-2.5 rounded-md w-full text-center"
        >
          <FormattedMessage id="button" />
        </Button>
        <Text className="text-base text-center text-text-secondary">
          <FormattedMessage id="expiration" />
        </Text>
        <Text className="text-base text-center text-text-tertiary">
          <FormattedMessage id="linkTitle" />
          <Link href={configurationLink} className="text-link-primary">
            <FormattedMessage id="link" />
          </Link>
        </Text>
        <Text className="text-base">
          <FormattedMessage id="stepTitle" />
        </Text>
        <Text className="text-base whitespace-pre-line">
          <FormattedMessage id="step1" />
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
} as const

export default Template
