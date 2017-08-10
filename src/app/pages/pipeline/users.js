import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject(Lazy.of(HttpClient))
export class Users {
  heading = 'Github Users';
  users = [];

  data = [
    {
      jobname: 'Maven',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    },
    {
      jobname: 'Java',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'failed'
    },
    {
      jobname: 'Javascript',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'running'
    },
    {
      jobname: 'Aurelia project2',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    },
    {
      jobname: 'Angular Css Project 3 project 4 project 7',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'failed'
    },
    {
      jobname: 'Maven project',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    },
    {
      jobname: 'Maven project',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    },
    {
      jobname: 'Maven project',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    },
    {
      jobname: 'Maven project',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    },
    {
      jobname: 'Maven project',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    },
    {
      jobname: 'Maven project',
      lastBuild: '08 July 2017 ',
      LatestBuild: '09 Aug 2017 ',
      status: 'passed'
    }
  ]

  constructor(getHttpClient) {
    this.getHttpClient = getHttpClient;
  }

  async activate() {
    // ensure fetch is polyfilled before we create the http client
    await fetch;
    const http = this.http = this.getHttpClient();

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    //const response = await http.fetch('users');
    //this.users = await response.json();
  }
}
