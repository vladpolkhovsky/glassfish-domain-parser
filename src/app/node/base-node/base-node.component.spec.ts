import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNodeComponent } from './base-node.component';

describe('BaseNodeComponent', () => {
  let component: BaseNodeComponent;
  let fixture: ComponentFixture<BaseNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
