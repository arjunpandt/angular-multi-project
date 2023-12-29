import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComp1Component } from './nested-comp-1.component';

describe('NestedComp1Component', () => {
  let component: NestedComp1Component;
  let fixture: ComponentFixture<NestedComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedComp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
