import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http: HttpClient) { }


  getbooks(){

    return this.http.get('http://localhost:3000/Library');
  }

  NewBooks(item : any) {

       return this.http.post('http://localhost:3000/insert', { item })
       .subscribe(data => { console.log(data) });
  }

  deleteBook(id : any) {

    console.log("delete",id);
    return this.http.delete('http://localhost:3000/remove/'+ id)

    
}



updateBook(id : any){

  return this.http.get('http://localhost:3000/'+ id);
}

editBook(book : any){

  console.log('client update',book);
  return this.http.put('http://localhost:3000/update', book )
  .subscribe(data =>{console.log(data)});
}




}
