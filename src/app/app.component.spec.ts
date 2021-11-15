import { Directive } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';

@Directive({ selector: 'app-bugyo-timecard' })
class FakeBugyoTimecard {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [AppComponent, FakeBugyoTimecard],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
