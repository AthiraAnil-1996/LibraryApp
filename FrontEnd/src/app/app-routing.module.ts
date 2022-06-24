import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [


{ path: '', component:HomeComponent},
{ path: 'main', component:MainComponent,children: [{ path: 'add', component: AddBookComponent},
{ path: 'list', component: BookListComponent },
{ path: 'update', component: UpdateBookComponent}
] } ,
{ path: 'login', component:LoginComponent},  
{ path: 'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
