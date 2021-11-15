import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BugyoAgentClientService } from './bugyo-agent-client.service';

describe('BugyoAgentClientService', () => {
  let service: BugyoAgentClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(BugyoAgentClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
