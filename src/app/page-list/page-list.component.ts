import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from "../SearchResult";

@Component({
     selector: 'app-page-list',
     templateUrl: './page-list.component.html',
     styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
     @Input() results: SearchResult[] = []
}
