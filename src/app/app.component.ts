import {Component, ElementRef, ViewChild} from '@angular/core';
import {DomainFileParserServiceService} from "./services/domain-file-parser-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'glassfish-domain-parser';

  constructor(public domainFileParserService: DomainFileParserServiceService) {

  }

  @ViewChild("preElement", {
    static: true
  }) preElement: ElementRef;

  initializationPassed: boolean = false;

  isInitializationPassed(value: boolean) {
    this.initializationPassed = value;
  }

}
