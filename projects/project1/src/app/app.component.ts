import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NestedComp1Component } from './nested-comp-1/nested-comp-1.component';
import { NestedComp2Component } from './nested-comp-2/nested-comp-2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NestedComp1Component,
    NestedComp2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project1';
}
