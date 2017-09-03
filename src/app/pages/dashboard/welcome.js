//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Welcome to Autopiled Dashboard';

  cardContents = [
    {
      header: 'Pipeline',
      type: 'bar'
    },
    {
      header: 'Code Quality',
      type: 'line'
    },
    {
      header: 'Alerts',
      type: 'line'
    }
  ]

  alerts = [
    {
      header: 'Team Announcement',
      class: true,
      content: 'Vineet is using deployment server (10.12.33.111). Do not use  the same till 25th july'
    }
  ]

}

