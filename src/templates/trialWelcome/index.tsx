import { Section, Text, Link } from '@react-email/components'
import { useIntl } from 'react-intl';

export default ({ trialEndDate, link }: { trialEndDate: string, link: string }) => {
    const intl = useIntl();
    return (
        <Section className="text-text-primary px-4">
            <Text className="text-xl font-bold text-center">{intl.formatMessage({ id: 'trialWelcome.title' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'trialWelcome.content' }, { trialEndDate })}</Text>
            <Text className="text-base">{intl.formatMessage({ id: 'trialWelcome.howToActivate' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'trialWelcome.howToActivateContent' }, { link })}</Text>
            <Text className="text-base">{intl.formatMessage({ id: 'trialWelcome.qrCodeTitle' })}</Text>
            <Text className="text-base">{intl.formatMessage({ id: 'trialWelcome.stepTitle' })}</Text>
            <Text className="text-base">
                {intl.formatMessage({ id: 'trialWelcome.step1' })}
                <Link href="link" className="text-link-primary">{intl.formatMessage({ id: 'trialWelcome.ici' })}</Link>
            </Text>
            <Text className="text-base">{intl.formatMessage({ id: 'trialWelcome.step2' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'trialWelcome.contactContent' })}</Text>
            <Text className="text-base whitespace-pre-line text-text-tertiary">{intl.formatMessage({ id: 'trialWelcome.footer' })}</Text>
        </Section>
    )
}