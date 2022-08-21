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

  node: any;

  @ViewChild("preElement", {
    static: true
  }) preElement: ElementRef;

  initializationPassed: boolean = false;

  showDebugJson: boolean = false;

  isInitializationPassed(value: boolean) {
    this.initializationPassed = value;
    this.node = this.domainFileParserService.content();
  }

  save() {
    let text = this.domainFileParserService.jsonToDomain(this.node);
    console.log("base node", this.node)
    console.log(text)
  }

}
