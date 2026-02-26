import { Column, Row, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../../_partials/layout/index.js'
import { Locales } from '../../index.js'
import messages from './messages.json' with { type: 'json' }

type Args = {
  bankName: string
  bankUrl: string
}

const Template = ({
  bankName = '--',
  bankUrl = '--',
  locale = 'fr',
}: Args & { locale: Locales }) => {
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-0 max-w-2xl mx-auto">
        {/* Main titles */}
        <Text className="text-lg font-bold text-[#111] text-left mb-0">
          <span className="text-[#E53E3E] mr-1">
            <FormattedMessage id="title1" /> :
          </span>
          <FormattedMessage id="title2" />
        </Text>
        {/* Main text */}
        <Text className="text-base text-text-primary mt-4 mb-2">
          <FormattedMessage
            id="txt1"
            values={{
              bankName,
              bankUrl,
              bold: (chunks) => <span style={{ fontWeight: 'bold' }}>{chunks}</span>,
            }}
          />
        </Text>
        {/* Alert card */}
        <Section className="border border-[#E53E3E] bg-[#FFF5F5] rounded-md p-4 my-4 flex flex-row items-start">
          <Row>
            <Column>
              {/* alert icon with rounded container */}
              <div className="rounded-full bg-[#FED7D7] w-[36px] h-[36px]">
                <div style={{ color: '#63171B', fontSize: 22, textAlign: 'center' }}>
                  &#9888;
                </div>
              </div>
            </Column>
            <Column>
              <Text className="text-base text-[#9B2C2C] m-0 ml-3">
                <FormattedMessage id="txt2" />
              </Text>
            </Column>
          </Row>
        </Section>
        {/* Joint file */}
        <Section className="flex flex-row items-center mb-2">
          <Text className="text-base text-text-primary m-0">
            <span style={{ fontSize: 18, marginRight: 8, color: '#6B7280' }}>
              &#128206;
            </span>
            <FormattedMessage id="txt3" />
          </Text>
        </Section>
        {/* Recommandation */}
        <Text className="text-base font-bold text-[#111] mt-4">
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
