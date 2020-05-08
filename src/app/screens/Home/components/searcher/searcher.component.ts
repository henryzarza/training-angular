import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent {
  @Output() changeInput = new EventEmitter<string>();

  handleInputChange(value: string) {
    this.changeInput.emit(value.toLowerCase());
  }
}
