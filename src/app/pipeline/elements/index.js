export function configure(config) {
  config.globalResources(
    [
      PLATFORM.moduleName('./job-elements')
    ]);
}
