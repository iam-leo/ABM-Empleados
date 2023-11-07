import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmMessageComponent } from './components/shared/confirm-message/confirm-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmployeeComponent,
    ListEmployeesComponent,
    NavbarComponent,
    ConfirmMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
