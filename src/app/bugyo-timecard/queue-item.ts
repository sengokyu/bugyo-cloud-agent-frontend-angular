import { ClockType } from '../types';

export interface QueueItem {
  tenantCode?: string;
  username?: string;
  password?: string;
  clockType?: ClockType;
}
