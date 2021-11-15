import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { QueueItem } from './queue-item';

@Injectable({
  providedIn: 'root',
})
export class BugyoAgentClientService {
  constructor(private http: HttpClient) {}

  sendData(queueItem: QueueItem): Observable<Object> {
    return this.http
      .post(environment.bugyoAgentUrl, queueItem, {
        responseType: 'text',
      })
      .pipe(retry(2));
  }
}
