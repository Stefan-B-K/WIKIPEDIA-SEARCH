import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { WikiResponse } from "./WikiResponse";

@Injectable({
     providedIn: 'root'
})
export class WikipediaService {
     url = 'https://en.wikipedia.org/w/api.php'

     constructor (private http: HttpClient) { }

     search (term: string) {
          return this.http.get<WikiResponse>(this.url, {
               params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    utf8: '1',
                    srsearch: term,
                    origin: '*'
               }
          }).pipe(
               map(response => response?.query?.search)
          )
     }
}
