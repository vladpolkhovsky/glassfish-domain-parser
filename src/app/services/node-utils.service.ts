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
    let key:string = Object.keys(node)
      .filter(value => value === this.attributesName)[0];
    if (key == null) {
      return [];
    }

    let attrNode = node[this.attributesName];
    if (attrNode == undefined) {
      return [];
    }

    let attrKeys = Object.keys(attrNode);
    if (attrKeys == null) {
      return [];
    }

    let resultPropertyArray:AttributeProperty[] = []
    for (let cKey of attrKeys) {
      resultPropertyArray.push({
        name: cKey,
        value: attrNode[cKey]
      });
    }

    return resultPropertyArray;
  }
}
