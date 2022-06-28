import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  server_address: string = 'api';

  constructor(public http: HttpClient) { }


  login(authData:any){
    return this.http.post<any>(`${this.server_address}/login`,authData);

    }


  getbooks(){

    return this.http.get<any>(`${this.server_address}/Library`);
  }

  NewBooks(item : any) {

       return this.http.post(`${this.server_address}/insert`, { item })
       .subscribe(data => { console.log(data) });
  }

  deleteBook(id : any) {

    console.log("delete",id);
    return this.http.delete(`${this.server_address}/remove/`+ id)

    
}



updateBook(id : any){

  return this.http.get(`${this.server_address}/`+ id);
}

editBook(book : any){

  console.log('client update',book);
  return this.http.put(`${this.server_address}/update`, book )
  .subscribe(data =>{console.log(data)});
}




}
