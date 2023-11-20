import { createStore } from 'zustand/vanilla';
import { ROUTES } from './routes.enum';
import { StateType } from './state';

export const Store = createStore<StateType>()((set) => ({
  routes: {
    [ROUTES.INFORMATION]: '/',
    [ROUTES.PAYMENT]: '/',
  },
  setRoutes: (routes) => {
    console.log('CM', 'setRoutes called', routes);
    return set(() => ({ routes }));
  },
}));
