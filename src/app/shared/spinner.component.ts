import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <i *ngIf="visible" class="fa fa-spinner fa-spin fa-5x"></i>
  `
})
export class SpinnerComponent {
   @Input() visible = true; 
}
