import {Component, Input, OnInit} from '@angular/core';
import {NodeUtilsService} from "../../services/node-utils.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateNodeDialogComponent} from "../../dialog/create-node-dialog/create-node-dialog.component";
import {isArray} from "@angular/compiler-cli/src/ngtsc/annotations/common";

export interface AttributeProperty {
  name: string,
  value: string
}

@Component({
  selector: 'app-base-node',
  templateUrl: './base-node.component.html',
  styleUrls: ['./base-node.component.scss']
})
export class BaseNodeComponent implements OnInit {

  attributes: AttributeProperty[];

  childNodes: {
    name: string,
    object: any
  }[] = [];

  @Input()
  nodeName: string;

  @Input()
  isIndexedChild: boolean;

  @Input()
  node: any;

  @Input()
  parentNode: any;

  @Input()
  collapseChildNode: boolean = true;

  constructor(
    private nodeUtils: NodeUtilsService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.childNodes = this.nodeUtils.resolveChildNodes(this.node);
    this.attributes = this.nodeUtils.resolveAttributes(this.node);
    this.collapseChildNode = !this.isArray();
    console.log(this.node);
  }

  processExpandButtonClick() {
    this.collapseChildNode = !this.collapseChildNode;
    console.log(this.childNodes)
  }

  clickDelete() {
    console.log(22131313);
  }

  addNewNode() {
    let dialogRef = this.dialog.open(CreateNodeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.saved) {
        if (this.node === "") {
          this.node = {};
        }
        let newNode = this.node[result.name];
        if (newNode == null) {
          this.node[result.name] = "";
        } else if (Array.isArray(newNode)) {
          newNode.push("");
        } else {
          let temp = newNode;
          this.node[result.name] = [temp];
          this.node[result.name].push("");
        }
        this.ngOnInit();
      }
      this.parentNode[this.nodeName] = this.node;
    });
  }

  editName() {

  }

  addAttribute() {

  }

  isArray(): boolean {
   return Array.isArray(this.node);
  }

  editAttr(index: number) {
    console.log("edit", index)
  }

  deleteAttr(index: number) {
    console.log("delete", index)
  }
}
