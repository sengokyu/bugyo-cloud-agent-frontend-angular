import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BugyoTimecardComponent } from './bugyo-timecard/bugyo-timecard.component';
import { OverlaySpinnerComponent } from './overlay-spinner/overlay-spinner.component';

@NgModule({
  declarations: [AppComponent, BugyoTimecardComponent, OverlaySpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
