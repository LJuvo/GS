import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    '[class.gs]': `true`,
  },
})
export class AppComponent {
  title = 'GS';
}
