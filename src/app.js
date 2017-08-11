import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Autoplied';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./app/pages/dashboard/welcome'),
        nav: true,
        title: 'Dashboard'
      },
      {
        route: 'pipeline',
        name: 'pipeline',
        moduleId: PLATFORM.moduleName('./app/pages/pipeline/users'),
        nav: true,
        title: 'Pipeline'
      },
      {
        route: 'report',
        name: 'report',
        moduleId: PLATFORM.moduleName('./app/pages/report/report'),
        nav: true,
        title: 'Report'
      },
      {
        route: 'job',
        name: 'job',
        moduleId: PLATFORM.moduleName('./app/pages/job/job'),
        nav: true,
        title: 'Create CI/CD'
      }
    ]);
    this.router = router;
  }
}



