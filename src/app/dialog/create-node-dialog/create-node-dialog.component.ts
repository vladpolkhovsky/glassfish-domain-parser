import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-node-dialog',
  templateUrl: './create-node-dialog.component.html',
  styleUrls: ['./create-node-dialog.component.scss']
})
export class CreateNodeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateNodeDialogComponent>) { }

  nodeName:string;

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  cancel() {
    this.dialogRef.close({ saved: false })
  }

  save() {
    this.dialogRef.close({ saved: true, name: this.nodeName});
  }

  onNoClick(): void {
    this.dialogRef.close({ saved: false });
  }

}
