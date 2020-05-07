import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="container">
      <div class="spinner"></div>
      <h3 class="text">Loading</h3>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {}
