import { Component, EventEmitter, Output } from '@angular/core';

@Component({
     selector: 'app-search-bar',
     templateUrl: './search-bar.component.html',
     styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
     searchTerm = ''
     @Output() submitSearch = new EventEmitter<string>()

     setSearchTerm (target: EventTarget) {
          this.searchTerm = (target as HTMLInputElement).value
     }

     submitForm (event: Event) {
          event.preventDefault()
          this.submitSearch.emit(this.searchTerm)
     }
}
