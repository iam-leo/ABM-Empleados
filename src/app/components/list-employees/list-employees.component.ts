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
  }
}
