import '~/app/globals.css';

import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

import configuration from '~/configuration';
import Button from '~/core/ui/Button';
import Heading from '~/core/ui/Heading';
import Trans from '~/core/ui/Trans';
import { PagesDirectoryFonts } from '~/components/Fonts';

import SiteHeader from '~/app/(site)/components/SiteHeader';
import I18nProvider from '~/i18n/I18nProvider';

const InternalServerErrorPage: React.FC<{
  locale: string;
}> = ({ locale }) => {
  return (
    <>
      
    </>
  );
};
export default InternalServerErrorPage;

export function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale ?? context.defaultLocale ?? 'en';

  return {
    props: {
      locale,
    },
  };
}
