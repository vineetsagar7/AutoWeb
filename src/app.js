import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Autoplied';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./app/dashboard/welcome'),
        nav: true,
        title: 'Dashboard'
      },
      {
        route: 'pipeline',
        name: 'pipeline',
        moduleId: PLATFORM.moduleName('./app/pipeline/users'),
        nav: true,
        title: 'Pipeline'
      },
      {
        route: 'report',
        name: 'report',
        moduleId: PLATFORM.moduleName( './app/report/report'),
        nav: true,
        title: 'Report'
      },
      {
        route: 'job',
        name: 'job',
        moduleId: PLATFORM.moduleName('./app/job/job'),
        nav: true,
        title: 'Job'
      }
      // {
      //   route: 'basic',
      //   name: 'basic',
      //   moduleId: './app/job/job',
      //   nav: true,
      //   title: 'basic'
      // },
      //{ route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}



