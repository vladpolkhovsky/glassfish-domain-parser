import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NodeUtilsService} from "../../services/node-utils.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateNodeDialogComponent} from "../../dialog/create-node-dialog/create-node-dialog.component";
import {DomainFileParserServiceService} from "../../services/domain-file-parser-service.service";
import {EditNodeAttrComponent} from "../../dialog/edit-node-attr/edit-node-attr.component";

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

  @Output()
  deleteEvent = new EventEmitter<string>;

  @Output()
  renameEvent = new EventEmitter<any>;

  constructor(
    private domainFileService: DomainFileParserServiceService,
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
    this.deleteEvent.emit(this.nodeName);
  }

  addNewNode() {
    let dialogRef = this.dialog.open(CreateNodeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.saved) {
        this.resolveAddition(result.name);
      }
    });
  }

  resolveAddition(name: string, element = "") {
    console.log("apply", name, element);
    if (this.node === "") {
      this.node = {};
    }
    let newNode = this.node[name];
    if (newNode == null) {
      this.node[name] = element;
    } else if (Array.isArray(newNode)) {
      newNode.push(element);
    } else {
      let temp = newNode;
      this.node[name] = [temp];
      this.node[name].push(element);
    }
    if (this.parentNode != null) {
      this.parentNode[this.nodeName] = this.node;
    }
    this.ngOnInit();
  }

  editName() {
    let dialogRef = this.dialog.open(CreateNodeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.saved) {
        let cData = {name: result.name, data: this.node}
        delete this.parentNode[this.nodeName];
        console.log("To rename", cData, result);
        this.renameEvent.emit({name: result.name, data: cData});
        this.clickDelete();
      }
    });
  }

  addAttribute() {
    if (this.node === "") {
      this.node = {};
    }

    if (this.node[this.domainFileService.options.attributesGroupName] === undefined) {
      this.node[this.domainFileService.options.attributesGroupName] = {};
    }

    let count = Object.keys(this.node[this.domainFileService.options.attributesGroupName]).length;
    this.node[this.domainFileService.options.attributesGroupName]["attr-" + count] = "value-" + count;

    if (this.parentNode != null) {
      this.parentNode[this.nodeName] = this.node;
    }

    this.ngOnInit();
  }

  isArray(): boolean {
    return Array.isArray(this.node);
  }

  editAttr(index: number) {
    let key = Object.keys(this.node[this.domainFileService.options.attributesGroupName])[index];
    let dialogRef = this.dialog.open(EditNodeAttrComponent, {
      data: {
        name: key,
        value: this.node[this.domainFileService.options.attributesGroupName][key],
        index: index
      }
    });
    console.log("edit", index);
    dialogRef.afterClosed().subscribe(result => {
      if (result.saved) {
        console.log(result);
        delete this.node[this.domainFileService.options.attributesGroupName][result.name];
        delete this.node[this.domainFileService.options.attributesGroupName][key];
        this.node[this.domainFileService.options.attributesGroupName][result.name] = result.value;
      }
      this.ngOnInit();
    });
  }

  deleteAttr(index: number) {
    let key = Object.keys(this.node[this.domainFileService.options.attributesGroupName])[index];
    delete this.node[this.domainFileService.options.attributesGroupName][key];

    if (this.parentNode != null) {
      this.parentNode[this.nodeName] = this.node;
    }

    this.ngOnInit();
  }

  deleteEventListener(nodeKey: string) {
    delete this.node[nodeKey];
    this.ngOnInit();
  }
}
