export function configure(config) {
  config.globalResources(
    [
      PLATFORM.moduleName('./footer'),
      PLATFORM.moduleName('./right-sidebar')
    ]);
}
