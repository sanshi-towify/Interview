import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialog} from './login-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
