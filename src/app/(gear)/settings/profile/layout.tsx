import SettingsContentContainer from '~/app/(gear)/settings/components/SettingsContentContainer';
import ProfileSettingsTabs from '~/app/(gear)/settings/profile/components/ProfileSettingsTabs';

function ProfileSettingsLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div>
        <ProfileSettingsTabs />
      </div>

      <SettingsContentContainer>{children}</SettingsContentContainer>
    </>
  );
}

export default ProfileSettingsLayout;
