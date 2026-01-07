import { Img, Link, Section, Text } from '@react-email/components'
import { FormattedMessage } from 'react-intl'

export const Footer = () => {
  return (
    <Section className="bg-septeo-primary p-8 text-center mt-20">
      <Img
        src="https://app.upsignon.eu/mails/logoFooter.png"
        alt="Septeo"
        className="mx-auto"
      />
      <Text className="text-white text-base">
        <FormattedMessage id="footerContent" />
      </Text>
      <Link href="link" className="text-white text-base underline">
        <FormattedMessage id="footerLink" />
      </Link>
    </Section>
  )
}
