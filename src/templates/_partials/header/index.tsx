import { Section, Img } from '@react-email/components'

export const Header = () => {
    return (
        <Section className="mb-6">
            <Img src="/src/templates/_assets/logoHeader.png" alt="Septeo" className="mx-auto" />
            <Img src="/src/templates/_assets/nerd.png" alt="Septeo" className="w-full" />
        </Section>
    )
}