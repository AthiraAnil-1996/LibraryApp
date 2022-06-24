import { Component, OnInit } from '@angular/core';
import { Bookmodel } from '../book-list/book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  
  books: Bookmodel[] = [];

  constructor(private BookService: BookService, public router: Router ) { }

  ngOnInit(): void {

    this.BookService.getbooks().subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
      console.log(this.books);
    })
  }

  editBook(book:any){
   localStorage.setItem("editBookid",book._id.toString());
    this.router.navigate(['update']);
  }

  deleteBook(book:any){
    console.log("delete",book)
    this.BookService.deleteBook(book._id)
    .subscribe((data)=>{
      this.books = this.books.filter(p=>p !== book);
    })
  }

}
