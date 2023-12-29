import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComp2Component } from './nested-comp-2.component';

describe('NestedComp2Component', () => {
  let component: NestedComp2Component;
  let fixture: ComponentFixture<NestedComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedComp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
