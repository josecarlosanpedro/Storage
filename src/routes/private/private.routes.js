import { lazy } from 'react';

const HomeModule = lazy(() =>
  import('../../modules/Home'),
);

const privateRoutes = [
  {
    id: 'homeModule',
    path: '/home',
    component: HomeModule,
    exact: true,
  },
  {
    id: 'homeModule',
    path: '/',
    component: HomeModule,
    exact: true,
  },
];

export default privateRoutes;
