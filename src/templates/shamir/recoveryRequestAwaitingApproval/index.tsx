import { Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../../_partials/layout/index.js'
import { Locales } from '../../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  vaultEmail: string
  expiryDate: Date
  requestDate: Date
  device: string
  deviceType: string
}

const Template = async ({
  vaultEmail = 'someone@septeo.com',
  expiryDate = new Date(Date.now() + 6 * 24 * 3600 * 1000),
  requestDate = new Date(),
  device = '[Device name]',
  deviceType = '[Device type]',
  locale = 'fr',
}: Args & { locale: Locales }) => {
  const remainingDays =
    (expiryDate.getTime() - requestDate.getTime()) / (1000 * 24 * 3600)
  const dateFormatter = Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-base">
          <FormattedMessage id="content1" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content2a" />
          <br />
          <FormattedMessage
            id="content2b"
            values={{
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage
            id="content3"
            values={{
              vaultEmail,
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Section className="bg-[#C6D5FF] rounded-md py-2 px-2">
          <Text className="text-base text-[#2E3862] p-0 m-0 uppercase font-bold">
            <FormattedMessage
              id="content4"
              values={{
                remainingDays,
                expiryDate: dateFormatter.format(expiryDate),
              }}
            />
          </Text>
        </Section>
        <Text className="text-base text-[#586081] text-sm">
          <FormattedMessage
            id="content5"
            values={{
              requestDate: dateFormatter.format(requestDate),
              em: (chunks) => <em>{chunks}</em>,
            }}
          />
          <br />
          <FormattedMessage
            id="content6"
            values={{
              device,
              deviceType,
              em: (chunks) => <em>{chunks}</em>,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage
            id="content7"
            values={{
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content8" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content9" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="content10" />
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
