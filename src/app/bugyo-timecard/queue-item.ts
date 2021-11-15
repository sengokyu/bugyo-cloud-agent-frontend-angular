import { ClockType } from 'bugyo-cloud-client';

export interface QueueItem {
  tenantCode?: string;
  username?: string;
  password?: string;
  clockType?: ClockType;
}
