import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BugyoAgentClientService } from './bugyo-agent-client.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('BugyoAgentClientService', () => {
  let service: BugyoAgentClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
    service = TestBed.inject(BugyoAgentClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
