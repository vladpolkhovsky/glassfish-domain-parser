import { Injectable } from '@angular/core';

import {XMLParser} from "fast-xml-parser";

@Injectable({
  providedIn: 'root'
})
export class DomainFileParserServiceService {

  private static readonly options = {
    ignoreAttributes: false,
    attributeNamePrefix : "",
    attributesGroupName : "@attributes"
  };

  constructor() { }

  private data: any;

  public content(): any {
    return this.data;
  }

  public domainTextToJson(xmlData: string):any | null {
    this.data = new XMLParser(DomainFileParserServiceService.options).parse(xmlData);
  }

}
