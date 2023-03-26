import SettingsTile from '~/app/(gear)/settings/components/SettingsTile';
import UpdateEmailFormContainer from '~/app/(gear)/settings/profile/components/UpdateEmailFormContainer';
import Trans from '~/core/ui/Trans';

export const metadata = {
  title: 'Update Email',
};

const ProfileEmailSettingsPage = () => {
  return (
    <SettingsTile
      heading={<Trans i18nKey={'profile:emailTab'} />}
      subHeading={<Trans i18nKey={'profile:emailTabTabSubheading'} />}
    >
      <UpdateEmailFormContainer />
    </SettingsTile>
  );
};

export default ProfileEmailSettingsPage;
