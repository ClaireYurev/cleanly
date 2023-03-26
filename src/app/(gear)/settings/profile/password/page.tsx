import UpdatePasswordFormContainer from '~/app/(gear)/settings/profile/components/UpdatePasswordFormContainer';
import SettingsTile from '~/app/(gear)/settings/components/SettingsTile';
import Trans from '~/core/ui/Trans';

export const metadata = {
  title: 'Update Password',
};

const ProfilePasswordSettingsPage = () => {
  return (
    <SettingsTile
      heading={<Trans i18nKey={'profile:passwordTab'} />}
      subHeading={<Trans i18nKey={'profile:passwordTabSubheading'} />}
    >
      <UpdatePasswordFormContainer />
    </SettingsTile>
  );
};

export default ProfilePasswordSettingsPage;
