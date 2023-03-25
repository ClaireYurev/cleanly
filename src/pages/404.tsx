import '~/app/globals.css';

import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

import Button from '~/core/ui/Button';
import Heading from '~/core/ui/Heading';
import Trans from '~/core/ui/Trans';

import SiteHeader from '~/app/(site)/components/SiteHeader';
import { PagesDirectoryFonts } from '~/components/Fonts';
import I18nProvider from '~/i18n/I18nProvider';
import configuration from '~/configuration';

const NotFoundPage: React.FC<{
  locale: string;
}> = ({ locale }) => {
  return (
    <>
      <PagesDirectoryFonts />

      <Head>
        <title key="title">{`Page not found - ${configuration.site.name}`}</title>
      </Head>

      <SiteHeader />
    </>
  );
};

export default NotFoundPage;

export function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale ?? context.defaultLocale ?? 'en';

  return {
    props: {
      locale,
    },
  };
}
