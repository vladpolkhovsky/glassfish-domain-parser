import { Injectable } from '@angular/core';
import {AttributeProperty} from "../node/base-node/base-node.component";
import {DomainFileParserServiceService} from "./domain-file-parser-service.service";

@Injectable({
  providedIn: 'root'
})
export class NodeUtilsService {

  private attributesName:string;

  constructor(private domainFileParserServiceService:DomainFileParserServiceService) {
    this.attributesName = domainFileParserServiceService.options.attributesGroupName;
  }

  resolveChildNodes(node: any) {

    let keys = Object.keys(node).filter(value => value !== this.attributesName);

    let nodes: {
      name: string,
      object: any
    }[] = [];

    for (let key of keys) {
      nodes.push({
        name: key,
        object: node[key]
      })
    }

    return nodes;
  }

  resolveAttributes(node: any): AttributeProperty[] {
    let key = Object.keys(node).filter(value => value === this.attributesName)[0];
    if (key !== null) {

    }
    return [];
  }
}
