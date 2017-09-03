// we want font-awesome to load as soon as possible to show the fa-spinner
import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'babel-polyfill';
import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
import { LogManager } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';

import Chart from 'chart.js';


LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

Bluebird.config({ warnings: { wForgottenReturn: false } });

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .defaultResources()
    .history()
    .router()
    .eventAggregator()
    // Uncomment the line belows to enable animation.
    .plugin(PLATFORM.moduleName('aurelia-chart'))
    .plugin(PLATFORM.moduleName('aurelia-chart/elements/chart-element'))
    .plugin(PLATFORM.moduleName('aurelia-chart/attributes/chart-attribute'))

    // if the css animator is enabled, add swap-order="after" to all router-view elements
    .feature(PLATFORM.moduleName('app/partials/index'))
    .feature(PLATFORM.moduleName('app/pages/dashboard/elements/index'))
    .feature(PLATFORM.moduleName('app/pages/pipeline/elements/index'))
    .feature(PLATFORM.moduleName('app/pages/job/elements/index'));
  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
