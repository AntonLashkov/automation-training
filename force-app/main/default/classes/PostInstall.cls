global class PostInstall implements InstallHandler {
    public static InstallContext context;

    global void onInstall(InstallContext installContext) {
        context = installContext;
        handleInstall();
    }

    private void handleInstall() {
        // Logic for Test
        insert new Contact(
            FirstName = 'Test',
            LastName = this.generateContactLastName(context.previousVersion()) 
        );
    }  

    private String generateContactLastName(Version version) {
        return String.format('{0}.{1}', new List<String> { String.valueOf(version.major()), String.valueOf(version.minor())});
    }
}
