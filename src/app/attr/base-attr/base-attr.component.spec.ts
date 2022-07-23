import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAttrComponent } from './base-attr.component';

describe('BaseAttrComponent', () => {
  let component: BaseAttrComponent;
  let fixture: ComponentFixture<BaseAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAttrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
