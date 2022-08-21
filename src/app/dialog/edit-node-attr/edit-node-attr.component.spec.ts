import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNodeAttrComponent } from './edit-node-attr.component';

describe('EditNodeAttrComponent', () => {
  let component: EditNodeAttrComponent;
  let fixture: ComponentFixture<EditNodeAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNodeAttrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNodeAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
