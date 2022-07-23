import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DomainFileParserServiceService} from "../services/domain-file-parser-service.service";

@Component({
  selector: 'app-domain-input-area',
  templateUrl: './domain-input-area.component.html',
  styleUrls: ['./domain-input-area.component.scss']
})
export class DomainInputAreaComponent implements OnInit {

  private static readonly MIN_TEXT_AREA_ROWS_COUNT = 10;

  private static readonly MAX_TEXT_AREA_ROWS_COUNT = 20;

  @Output() initializationPassedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("domainTextArea", {
    static: true
  }) textArea: ElementRef;

  domainTextAreaRowsCount: number;

  constructor(private domainFileParserService: DomainFileParserServiceService) {

  }

  ngOnInit(): void {
    this.domainTextAreaRowsCount = DomainInputAreaComponent.MIN_TEXT_AREA_ROWS_COUNT;
  }

  calcRowCount(textContent: string | null): number {
    let minLineCount = DomainInputAreaComponent.MIN_TEXT_AREA_ROWS_COUNT;
    let maxLineCount = DomainInputAreaComponent.MAX_TEXT_AREA_ROWS_COUNT;
    if (textContent === null) {
      return minLineCount;
    }
    let linesCount: number | null = textContent.split('\n').length;
    linesCount = (linesCount === null || linesCount < minLineCount) ? minLineCount : linesCount;
    return Math.min(maxLineCount, linesCount);
  }

  processFileUpload(files: FileList | null) {
    if (files === null) {
      return;
    }
    let file: File | null = files.item(0);
    if (file == null) {
      return;
    }
    file.text()
      .then(value => {
        this.textArea.nativeElement.value = value;
      })
  }

  processButtonClickHandler() {
    let value: string | null = this.textArea.nativeElement.value;
    if (value == null) {
      return;
    }
    this.domainFileParserService.domainTextToJson(value);
    this.initializationPassedEvent.emit(true);
  }
}
