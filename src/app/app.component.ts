import { Component } from '@angular/core';
import { WikipediaService } from "./wikipedia.service";
import { SearchResult } from "./WikiResponse";

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
})
export class AppComponent {
     searchResults: SearchResult[] = []

     constructor (private wiki: WikipediaService) {}

     onSearchEnter (term: string): void {
          this.wiki.search(term)
               .subscribe((results) => this.searchResults = results)
     }
}
