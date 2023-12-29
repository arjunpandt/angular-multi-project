import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCompLevel2Component } from './nested-comp-level-2.component';

describe('NestedCompLevel2Component', () => {
  let component: NestedCompLevel2Component;
  let fixture: ComponentFixture<NestedCompLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedCompLevel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedCompLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
