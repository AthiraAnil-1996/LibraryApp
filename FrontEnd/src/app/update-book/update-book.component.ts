import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Bookmodel } from '../book-list/book.model';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private router:Router,private bookservice:BookService) { }

  Bitem = new Bookmodel(0,"", "","", 0, 0);

  ngOnInit(): void {

    let bid = localStorage.getItem("editBookid");
    this.bookservice.updateBook(bid).subscribe((data)=>{
      this.Bitem=JSON.parse(JSON.stringify(data));

  })

}
NewBooks()
  {    
    this.bookservice.editBook(this.Bitem);   
    alert("Success");
    this.router.navigate(['/main/list']);
}
}






