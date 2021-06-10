import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="true; else elseBlock">Text 1 to show</div>
    <ng-template #elseBlock>Alternative text 1 to show</ng-template>

    <div *ngIf="false; then thblock else elBlock"></div>
    <ng-template #thBlock>Text 2 to show</ng-template>
    <ng-template #elBlock>Alternative text 2 to show</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngif-example';
}
