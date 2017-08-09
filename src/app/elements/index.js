export function configure(config) {
  config.globalResources(
    [
      PLATFORM.moduleName('./dashboardCard'),
      PLATFORM.moduleName('./sideBar')
    ]);
}
