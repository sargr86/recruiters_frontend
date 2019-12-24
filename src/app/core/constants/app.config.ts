import {environment} from '@env';
import {Section} from '@shared/models/Section';

export const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const API_URL = environment.apiUrl;
export const DASHBOARD_LINKS = [
  {
    name: 'Dashboard',
    children: [
      {name: 'Show dashboard'},
    ]
  },
  {
    name: 'Recruiters',
    children: [
      {name: 'Invite recruiter'},
      {name: 'Show recruiters'},
      {name: 'Missed Invitations'}
    ]
  },
  {
    name: 'Counselors',
    children: [
      {name: 'Invite counselor'},
      {name: 'Show counselors'},
      {name: 'Missed Invitations'}
    ]
  },
  {
    name: 'Users',
    children: [
      {name: 'Show users'}
    ]
  },
  {
    name: 'Territories',
    children: [
      {name: 'Add territories'},
      {name: 'Attach territories'},
      {name: 'Show territories'}
    ]
  },
];

export const MAIN_SECTIONS: Section[] = [
  {name: 'Dashboard', icon: 'local_hotel', link: 'dashboard'},
  {name: 'Users', icon: 'user', link: 'users'},
  // {name: 'Map'}
];

// Menu icons
export const MENU_ITEM_ICONS = [
  {item: 'dashboard', icon: 'fa-user'},
  {item: 'ferries', icon: 'fa-anchor'},
  {item: 'tours', icon: 'fa-directions'},
  {item: 'tour types', icon: 'fa-street-view'},
  {item: 'food', icon: 'fa-utensils'},
  {item: 'activities', icon: 'fa-swimmer'},
  {item: 'accommodations', icon: 'fa-bed'},
  {item: 'companies', icon: 'fa-briefcase'},
  {item: 'partners', icon: 'fa-users'},
  {item: 'employees', icon: 'fa-users'},
  {item: 'customers', icon: 'fa-users'},
  {item: 'jobs', icon: 'fa-suitcase'}
];

export const USER_TYPES = [
  {label: 'recruiters', role: 'recruiter'},
];

