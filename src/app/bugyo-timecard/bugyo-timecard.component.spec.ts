import { Directive, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { BugyoAgentClientService } from './bugyo-agent-client.service';
import { BugyoTimecardComponent } from './bugyo-timecard.component';

@Directive({ selector: 'app-overlay-spinner' })
class FakeOverlaySpinner {
  @Input()
  public observer?: Observable<any>;
}

describe('BugyoTimecardComponent', () => {
  let bugyoAgentClientService;
  let component: BugyoTimecardComponent;
  let fixture: ComponentFixture<BugyoTimecardComponent>;

  beforeEach(async () => {
    bugyoAgentClientService = jasmine.createSpyObj('BugyoAgentClientService', [
      'sendData',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
      ],
      declarations: [BugyoTimecardComponent, FakeOverlaySpinner],
      providers: [
        { provide: BugyoAgentClientService, useValue: bugyoAgentClientService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugyoTimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
