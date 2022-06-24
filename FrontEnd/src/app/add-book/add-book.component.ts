import { Component, OnInit } from '@angular/core';
import { Bookmodel } from '../book-list/book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  Bitem = new Bookmodel(0,"","", "", 0, 0); 
  

  constructor(public bookservice : BookService, public router: Router ) { }

  ngOnInit(): void {
  }

  NewBooks(){

    this.bookservice.NewBooks(this.Bitem);
    alert('New Book added!');
    this.router.navigate(['/main/list']);

  }

}
