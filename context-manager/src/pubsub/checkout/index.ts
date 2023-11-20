import { EVENTS } from '../events.enum';
import { Store, RoutesType } from '../../configuration/checkout';
import { PubSubType } from '../pubsub.type';

/* setup subscriptions from MFE and update zustand state accordingly */
export function setupCheckoutSubscriptions(PubSub: PubSubType) {
  PubSub.subscribe(EVENTS.SET_CHECKOUT_ROUTES, (_, data) => {
    Store.getState().setRoutes(data as RoutesType);
  });
}
