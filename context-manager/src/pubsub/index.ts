import PubSubJs from 'pubsub-js';
import { setupCheckoutSubscriptions } from './checkout';
import { PubSubType } from './pubsub.type';
import { EVENTS } from './events.enum';

const PubSub: PubSubType = PubSubJs;

setupCheckoutSubscriptions(PubSub);

export { PubSub, EVENTS };
