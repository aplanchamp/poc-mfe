import { RoutesType as CheckoutRoutesType } from '../configuration/checkout';
import { EVENTS } from './events.enum';

type EventDatasType = CheckoutRoutesType;

export type PubSubType = PubSubJS.Base<EventDatasType, EVENTS>;
