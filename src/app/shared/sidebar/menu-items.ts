import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-file',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'User Management',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/users-management/create-user',
    title: 'Create User',
    icon: 'mdi mdi-account-multiple-plus',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/users-management/users-panel',
    title: 'Users Panel',
    icon: 'mdi mdi-account-settings-variant',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Attendance',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/attendance/view-attendance',
    title: 'View Attendance',
    icon: 'mdi mdi-checkbox-multiple-marked',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/attendance/monthly-attendance',
    title: 'Monthly Attendance',
    icon: 'mdi mdi-checkbox-multiple-marked-circle-outline',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Admin',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/security-post/security-panel',
    title: 'Security Panel',
    icon: 'mdi mdi-nature-people',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Device',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/devices/activate-device',
    title: 'Activate Device',
    icon: 'mdi mdi-tablet-ipad',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/devices/list-activated-devices',
    title: 'List Of Activated Devices',
    icon: 'mdi mdi-vibrate',
    class: '',
    extralink: false,
    submenu: []
  },
];
