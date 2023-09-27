import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private bookUrl = 'https://gutendex.com/books/'
  private currentPage = 1;

  getBook(): Observable<any>{
    return this.http.get(`${this.bookUrl}?=1&limit=5&page=${this.currentPage}`)
  }

  previousPage(){
    this.currentPage--;
    return this.getBook();
  }

  nextPage(){
    this.currentPage++;
    return this.getBook();
  }

  searchBooksByAuthor(author: string): Observable<any> {
    return this.http.get(`${this.bookUrl}?limit=5&page=${this.currentPage}&search=${author}`);
  }

}
