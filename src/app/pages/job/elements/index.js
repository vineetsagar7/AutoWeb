export function configure(config) {
  config.globalResources(
    [
      PLATFORM.moduleName('./basicInfo'),
      PLATFORM.moduleName('./scm'),
      PLATFORM.moduleName('./technology'),
      PLATFORM.moduleName('./build'),
      PLATFORM.moduleName('./testing')
    ]);
}
