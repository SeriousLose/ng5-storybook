import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.less']
})
export class MyButtonComponent {

  @Input() name: string;

  constructor() {
    if (!this.name) {
      this.name = '测试';
    }
  }

}
