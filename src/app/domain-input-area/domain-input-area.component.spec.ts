import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainInputAreaComponent } from './domain-input-area.component';

describe('DomainInputAreaComponent', () => {
  let component: DomainInputAreaComponent;
  let fixture: ComponentFixture<DomainInputAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainInputAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainInputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
