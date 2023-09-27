import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'esameFinale';

  bookList: Book[] = [];
  searchTerm = '';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBook();
  }

  loadBook() {
    this.bookService.getBook().subscribe(
      (data: any) => {
        this.bookList = data.results;
      },
      (error) => {
        console.error("Errore nella chiamata all'API:", error);
      }
    );
  }

  loadNext() {
    this.bookService.nextPage().subscribe(
      (data: any) => {
        this.bookList = data.results;
      },
      (error) => {
        console.error('Errore nella chiamata all\'API:', error);
      }
    )
  };

  loadPrevious() {
    this.bookService.previousPage().subscribe(
      (data: any) => {
        this.bookList = data.results;
      },
      (error) => {
        console.error('Errore nella chiamata all\'API:', error);
      }
    )
  };

  searchBooks() {
    if (this.searchTerm.trim() === '') {
      this.loadBook();
    } else {
      this.bookService.searchBooksByAuthor(this.searchTerm).subscribe(
        (data: any) => {
          this.bookList = data.results;
        },
        (error) => {
          console.error('Errore nella ricerca dei libri:', error);
        }
      );
    }
  }
}
