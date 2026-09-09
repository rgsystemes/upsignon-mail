import { Img, Section } from '@react-email/components'

type THeaderProps = {
  hideImage?: boolean
}
export const Header = ({ hideImage }: THeaderProps) => {
  return (
    <Section className="mb-6">
      <Img
        src="https://app.upsignon.eu/mails/logoHeader.png"
        alt="Septeo"
        className="mx-auto mb-6"
      />
      {!hideImage && (
        <Img
          src="https://app.upsignon.eu/mails/nerd.png"
          alt="Septeo"
          className="w-full"
        />
      )}
    </Section>
  )
}
