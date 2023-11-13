import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  listEmployees: Employee[] = [];
  isDeleteUserModalOpen = false;
  nameEmployee = '';
  idEmployeeToDelete = 0;

  constructor( private _employeeService: EmployeeService, private toastr: ToastrService ){ }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    this.listEmployees = this._employeeService.getEmployees();
  }

  deleteEmployee(index: number){
    this._employeeService.deleteEmployee(index);
    this.loadEmployees();
    this.isDeleteUserModalOpen = false;
    this.toastr.warning('Empleado/a eliminado/a correctamente.', '¡Eliminado!');
  }

  openDeleteEmployeeModal(id: number, name: string) {
    this.isDeleteUserModalOpen = true;
    this.idEmployeeToDelete = id;
    this.nameEmployee = name;
  }

  closeDeleteUserModal(event: boolean) {
    if (!event) {
      this.isDeleteUserModalOpen = false;
    }
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
