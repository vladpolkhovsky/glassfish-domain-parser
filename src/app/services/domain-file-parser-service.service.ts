import {Injectable} from '@angular/core';

import {XMLBuilder, XMLParser} from "fast-xml-parser";

@Injectable({
  providedIn: 'root'
})
export class DomainFileParserServiceService {

  public readonly options = {
    ignoreAttributes: false,
    attributeNamePrefix: "",
    attributesGroupName: "@attributes",
    allowBooleanAttributes: true,
    suppressBooleanAttributes: false
  };

  constructor() {
  }

  private data: any;

  public content(): any {
    return this.data;
  }

  public domainTextToJson(xmlData: string): any | null {
    this.data = new XMLParser(this.options).parse(xmlData);
    if (this.data.domain != null) {
      this.data = this.data.domain;
    }
  }

  jsonToDomain(node: any) {
    console.log(new XMLBuilder(this.options).build(node));
  }
}
