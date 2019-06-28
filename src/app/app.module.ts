import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { DataService } from '../app/services/DataService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
