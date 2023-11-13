import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

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

  constructor( private _employeeService: EmployeeService ){ }

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
}
