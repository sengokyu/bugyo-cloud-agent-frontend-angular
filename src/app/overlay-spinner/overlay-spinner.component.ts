import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-overlay-spinner',
    templateUrl: './overlay-spinner.component.html',
    styleUrls: ['./overlay-spinner.component.scss'],
    standalone: false
})
export class OverlaySpinnerComponent {
  @Input()
  public observer?: Observable<any>;
}
