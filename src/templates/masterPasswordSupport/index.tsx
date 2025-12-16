import { Section, Text } from '@react-email/components'
import { useIntl } from 'react-intl';

export default ({ emailUser }: { emailUser: string }) => {
    const intl = useIntl();
    return (
        <Section className="text-text-primary px-4">
            <Text className="text-xl font-bold text-center">{intl.formatMessage({ id: 'masterPasswordSupport.title' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'masterPasswordSupport.content' }, { emailUser })}</Text>
            <Text className="text-base">{intl.formatMessage({ id: 'masterPasswordSupport.stepTitle' })}</Text>
            <Text className="text-base">{intl.formatMessage({ id: 'masterPasswordSupport.step1' })}</Text>
            <Text className="text-base">{intl.formatMessage({ id: 'masterPasswordSupport.step2' })}</Text>
            <Text className="text-base">{intl.formatMessage({ id: 'masterPasswordSupport.step3' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'masterPasswordSupport.footer' })}</Text>
        </Section>
    )
}
