import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const Works = lazy(() => import('../pages/Works'));
const Teams = lazy(() => import('../pages/Teams'));

export const dataRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/works',
    component: Works,
  },
  {
    path: '/teams',
    component: Teams,
  },
];
