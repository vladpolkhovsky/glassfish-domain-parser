import {Component, Input, OnInit} from '@angular/core';
import {NodeUtilsService} from "../../services/node-utils.service";


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
  node: any;

  @Input()
  collapseChildNode: boolean = true;

  constructor(
    private nodeUtils: NodeUtilsService
  ) {

  }

  ngOnInit(): void {
    this.childNodes = this.nodeUtils.resolveChildNodes(this.node);
    this.attributes = this.nodeUtils.resolveAttributes(this.node);
  }

  processExpandButtonClick() {
    this.collapseChildNode = !this.collapseChildNode;
    console.log(this.childNodes)
  }

}
