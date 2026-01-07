import { Img, Section } from '@react-email/components'

export const Header = () => {
  return (
    <Section className="mb-6">
      <Img
        src="https://app.upsignon.eu/mails/logoHeader.png"
        alt="Septeo"
        className="mx-auto"
      />
      <Img src="https://app.upsignon.eu/mails/nerd.png" alt="Septeo" className="w-full" />
    </Section>
  )
}
