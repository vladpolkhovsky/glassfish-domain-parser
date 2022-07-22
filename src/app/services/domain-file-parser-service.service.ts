import { Injectable } from '@angular/core';

import {XMLParser} from "fast-xml-parser";

@Injectable({
  providedIn: 'root'
})
export class DomainFileParserServiceService {

  private static readonly options = {
    ignoreAttributes: false,
    attributeNamePrefix : "",
    attributesGroupName : "attr"
  };

  constructor() { }

  public domainTextToJson(data: string):any | null {
    return new XMLParser(DomainFileParserServiceService.options).parse(data);
  }

}
