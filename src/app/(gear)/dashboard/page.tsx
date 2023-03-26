import dynamic from 'next/dynamic';
import Trans from '~/core/ui/Trans';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

import AppHeader from '~/app/(gear)/components/AppHeader';
import AppContainer from '~/app/(gear)/components/AppContainer';

const DashboardDemo = dynamic(
  () => import('~/app/(gear)/dashboard/DashboardDemo'),
  {
    ssr: false,
  }
);

export const metadata = {
  title: 'Dashboard',
};

function DashboardPage() {
  return (
    <>
      <AppHeader
        Icon={<Squares2X2Icon className={'h-4 h-6 dark:text-primary-500'} />}
      >
        <Trans i18nKey={'common:dashboardTabLabel'} />
      </AppHeader>

      <AppContainer>
        <DashboardDemo />
      </AppContainer>
    </>
  );
}

export default DashboardPage;
