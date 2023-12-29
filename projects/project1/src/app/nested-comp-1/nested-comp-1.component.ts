import { Component } from '@angular/core';
import { NestedCompLevel2Component } from './nested-comp-level-2/nested-comp-level-2.component';

@Component({
  selector: 'app-nested-comp-1',
  standalone: true,
  imports: [NestedCompLevel2Component],
  templateUrl: './nested-comp-1.component.html',
  styleUrl: './nested-comp-1.component.css',
})
export class NestedComp1Component {}
