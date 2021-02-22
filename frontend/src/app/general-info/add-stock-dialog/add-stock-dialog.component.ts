import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Stock } from 'src/app/interfaces/stock.interface';

@Component({
  selector: 'app-add-stock-dialog',
  templateUrl: './add-stock-dialog.component.html',
  styleUrls: ['./add-stock-dialog.component.scss']
})
export class AddStockDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddStockDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  newStock: Stock

  onNoClick(): void {
    this.dialogRef.close();
  }

}
