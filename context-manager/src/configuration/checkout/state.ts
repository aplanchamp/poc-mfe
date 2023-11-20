import { RoutesType } from './routes.type';

export type StateType = {
  routes: RoutesType;
  setRoutes: (routes: RoutesType) => void;
};
