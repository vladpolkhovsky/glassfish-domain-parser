import {Component, Input, OnInit} from '@angular/core';
import {AttributeProperty} from "../../node/base-node/base-node.component";

@Component({
  selector: 'app-base-attr',
  templateUrl: './base-attr.component.html',
  styleUrls: ['./base-attr.component.scss']
})
export class BaseAttrComponent implements OnInit {

  constructor() { }

  @Input("property")
  property: AttributeProperty;

  ngOnInit(): void {

  }

}
