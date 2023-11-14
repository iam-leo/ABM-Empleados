import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'add', component: AddEditEmployeeComponent },
  { path: 'edit/:id', component: AddEditEmployeeComponent },
  { path: '**', component: ListEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
