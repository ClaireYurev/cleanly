import OrganizationSettingsTabs from '~/app/(gear)/settings/organization/components/OrganizationSettingsTabs';
import SettingsContentContainer from '~/app/(gear)/settings/components/SettingsContentContainer';

function OrganizationSettingsLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div>
        <OrganizationSettingsTabs />
      </div>

      <SettingsContentContainer>{children}</SettingsContentContainer>
    </>
  );
}

export default OrganizationSettingsLayout;
