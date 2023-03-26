import Trans from '~/core/ui/Trans';

import SettingsTile from '~/app/(gear)/settings/components/SettingsTile';
import Plans from '~/app/(gear)/settings/subscription/components/Plans';
import PlansStatusAlertContainer from '~/app/(gear)/settings/subscription/components/PlanStatusAlertContainer';

export const metadata = {
  title: 'Subscription',
};

const SubscriptionSettingsPage = () => {
  return (
    <SettingsTile
      heading={<Trans i18nKey={'common:subscriptionSettingsTabLabel'} />}
      subHeading={<Trans i18nKey={'subscription:subscriptionTabSubheading'} />}
    >
      <div className={'flex flex-col space-y-4'}>
        <PlansStatusAlertContainer />

        <Plans />
      </div>
    </SettingsTile>
  );
};

export default SubscriptionSettingsPage;
