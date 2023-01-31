/**
 * Class for Post-Install execution
 */
public class SumoInstallContext implements InstallContext {
    private Integer major;
    private Integer minor;

    public SumoInstallContext(Integer major, Integer minor) {
        this.major = major;
        this.minor = minor;
    }

    public SumoInstallContext(String major, String minor) {
        this.major = Integer.valueOf(major);
        this.minor = Integer.valueOf(minor);
    }

    public Id organizationId() {
        return UserInfo.getOrganizationId();
    }
    public Id installerId() {
        return UserInfo.getUserId();
    }
    public Boolean isUpgrade() {
        return null;
    }
    public Boolean isPush() {
        return null;
    }
    public Version previousVersion() {
        return new Version(this.major, this.minor);
    }
    public void executePostInstall() {
        new PostInstall().onInstall(this);
    }
}
