import { Injectable } from '@angular/core';

const ITEM_KEY = 'tenantCode';

@Injectable({
  providedIn: 'root',
})
export class TenantCodeService {
  public load(): string | null | undefined {
    if (window.localStorage) {
      return window.localStorage.getItem(ITEM_KEY);
    }
  }

  public save(tenantCode: string | null): void {
    if (window.localStorage) {
      window.localStorage.setItem(ITEM_KEY, tenantCode);
    }
  }
}
