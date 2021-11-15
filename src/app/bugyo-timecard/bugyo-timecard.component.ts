import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClockType } from 'bugyo-cloud-client/dist/models/punch-info';
import { Subject } from 'rxjs';
import { BugyoAgentClientService } from './bugyo-agent-client.service';
import { QueueItem } from './queue-item';
import { TenantCodeService } from './tenant-code.service';

@Component({
  selector: 'app-bugyo-timecard',
  templateUrl: './bugyo-timecard.component.html',
  styleUrls: ['./bugyo-timecard.component.scss'],
})
export class BugyoTimecardComponent implements OnInit {
  item: QueueItem = {};
  inProgress$?: Subject<any>;

  constructor(
    private bugyoAgentClientService: BugyoAgentClientService,
    private tenantCodeService: TenantCodeService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadTenantCode();
  }

  onClickPunch(clockType: ClockType): void {
    this.inProgress$ = new Subject<any>();

    this.saveTenantCode();

    this.item.clockType = clockType;

    this.bugyoAgentClientService.sendData(this.item).subscribe(
      () => {
        this.inProgress$.complete();
        this.inProgress$ = undefined;
        this.snackBar.open('打刻しました', undefined, { duration: 5000 });
      },
      (error) => {
        this.inProgress$.complete();
        this.inProgress$ = undefined;
        this.dialog.open(ErrorMessageDialog);
      }
    );
  }

  private loadTenantCode(): void {
    this.item.tenantCode = this.tenantCodeService.load();
  }

  private saveTenantCode(): void {
    this.tenantCodeService.save(this.item.tenantCode);
  }
}

/**
 * 送信エラーダイアログ
 */
@Component({
  template: `<h3 mat-dialog-title>送信エラー</h3>
    <div mat-dialog-content>
      <p>送信に失敗しました。</p>
    </div>`,
})
export class ErrorMessageDialog {}
