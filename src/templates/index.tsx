import { render } from '@react-email/render';
import { Layout } from './_partials/index';
import { Html, Head } from '@react-email/components';

export const buildEmail = async (template: string, locale: string, args: Record<string, string> = {}) => {
  const templateMessages: Record<string, string> = (await import(`./${template}/${locale}.json`)).default;
  const footerMessages: Record<string, string> = (await import(`./_partials/footer/${locale}.json`)).default;
  const Component = (await import(`./${template}/index.tsx`)).default;
  if (!Component) throw new Error(`Template ${template} not found`);

  const intlMessages: Record<string, string> = {
    ...Object.fromEntries(
      Object.entries(footerMessages).map(([k, v]) => [`footer.${k}`, v])
    ),
    ...Object.fromEntries(
      Object.entries(templateMessages).map(([k, v]) => [`${template}.${k}`, v])
    ),
  };

  return render(
    <Html>
      <Head />
      <Layout messages={intlMessages} locale={locale}>
        <Component {...args} />
      </Layout>
    </Html>
  );
};