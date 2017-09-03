//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Welcome to Autopiled Dashboard';

  cardContents = [
    { header: 'Pipeline' },
    { header: 'Code Quality' },
    { header: 'Alerts' }
  ]

  alerts = [
    {
      header: 'Team Announcement',
      class: true,
      content: 'Vineet is using deployment server (10.12.33.111). Do not use  the same till 25th july'
    }
  ]

}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
