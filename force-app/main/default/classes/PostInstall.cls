global class PostInstall implements InstallHandler {
    public static InstallContext context;

    global void onInstall(InstallContext installContext) {
        context = installContext;
        handleInstall();
    }

    private void handleInstall() {
    }  
}
