import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html'
})
export class LoginDialog {
  constructor(public dialogRef: MatDialogRef<LoginDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
