import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  value: string;
  name: string;
  index: number
}

@Component({
  selector: 'app-edit-node-attr',
  templateUrl: './edit-node-attr.component.html',
  styleUrls: ['./edit-node-attr.component.scss']
})
export class EditNodeAttrComponent implements OnInit {

  attrName: string;

  attrValue: string;

  attrIndex: number;

  constructor(
    public dialogRef: MatDialogRef<EditNodeAttrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.attrName = data.name;
    this.attrValue = data.value;
    this.attrIndex = data.index;
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {

  }

  cancel() {
    this.dialogRef.close({saved: false})
  }

  save() {
    this.dialogRef.close({saved: true, name: this.attrName, value: this.attrValue, index: this.attrIndex});
  }

}
