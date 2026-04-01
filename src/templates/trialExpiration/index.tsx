import { Section, Text } from '@react-email/components'
import { useIntl } from 'react-intl'
import { FormattedMessage } from 'react-intl'

import { Layout } from '../_partials/layout/index.js'
import { Locales } from '../index.js'
import messages from './messages.json' with { type: 'json' }

type Trial = {
  id: string
  name: string
  reseller: string
  nbUsers: number
  createdAt: string
  remainingDays: number
}

type SalesTrials = {
  sales: string
  expired: Trial[]
  next7Days: Trial[]
  next14Days: Trial[]
}

type Args = {
  salesTrials: SalesTrials[]
}

const TrialsTable = ({
  trials,
  expiredCase,
  locale,
}: {
  trials: Trial[]
  expiredCase?: boolean
  locale: Locales
}) => {
  const intl = useIntl()
  return (
    <table
      style={{
        borderCollapse: 'collapse',
        width: '100%',
        borderBottom: '2px solid black',
      }}
    >
      <thead>
        <tr>
          {[
            'colId',
            'colName',
            'colReseller',
            'colNbUsers',
            'colCreatedAt',
            expiredCase ? 'colExpiredDays' : 'colRemainingDays',
          ].map((col) => (
            <th key={col} style={{ padding: '8px' }}>
              {intl.formatMessage({ id: col })}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...trials]
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((trial, i) => (
            <tr key={trial.id} style={{ background: i % 2 === 0 ? '#E7E7E7' : '#fff' }}>
              <td style={{ padding: '8px', textAlign: 'center' }}>{trial.id}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{trial.name}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{trial.reseller}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{trial.nbUsers}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>
                {new Date(trial.createdAt).toLocaleDateString(locale)}
              </td>
              <td
                style={{
                  padding: '8px',
                  textAlign: 'center',
                  ...(expiredCase ? { color: 'red' } : {}),
                }}
              >
                {trial.remainingDays}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

const SalesSection = ({
  salesTrials,
  locale,
}: {
  salesTrials: SalesTrials
  locale: Locales
}) => {
  const intl = useIntl()
  const salesName = salesTrials.sales
    ? salesTrials.sales.replace('@septeo.com', '')
    : intl.formatMessage({ id: 'unassigned' })

  return (
    <div>
      <h3>{salesName}</h3>
      {salesTrials.expired.length > 0 && (
        <div>
          <span>{intl.formatMessage({ id: 'sectionExpired' })}</span>
          <TrialsTable trials={salesTrials.expired} expiredCase locale={locale} />
          <br />
        </div>
      )}
      {salesTrials.next7Days.length > 0 && (
        <div>
          <span>{intl.formatMessage({ id: 'section7Days' })}</span>
          <TrialsTable trials={salesTrials.next7Days} locale={locale} />
          <br />
        </div>
      )}
      {salesTrials.next14Days.length > 0 && (
        <div>
          <span>{intl.formatMessage({ id: 'section14Days' })}</span>
          <TrialsTable trials={salesTrials.next14Days} locale={locale} />
          <br />
        </div>
      )}
    </div>
  )
}

const Template = ({ salesTrials = [], locale = 'fr' }: Args & { locale: Locales }) => {
  const sorted = [...salesTrials].sort((a, b) => (a.sales < b.sales ? -1 : 1))
  return (
    <Layout messages={messages[locale]} locale={locale}>
      <Section className="text-text-primary px-4">
        <Text className="text-base">
          <FormattedMessage id="hello" />
        </Text>
        {sorted.map((salesTrials) => (
          <SalesSection
            key={salesTrials.sales}
            salesTrials={salesTrials}
            locale={locale}
          />
        ))}
        <Text className="text-base">
          <FormattedMessage id="footer1" />
        </Text>
        <Text className="text-base">
          <FormattedMessage id="footer2" />
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
