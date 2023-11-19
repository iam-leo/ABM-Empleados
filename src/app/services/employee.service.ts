import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listEmployees: Employee[] = [
    { name: 'Leo', gender: 'masculino', phone: 1122334455, email: 'leo@leo.com', dateEntry: new Date(), matrialStatus: 'Soltero/a' },
    { name: 'Leo2', gender: 'masculino', phone: 1122334455, email: 'leo@leo.com', dateEntry: new Date(), matrialStatus: 'Soltero/a' }
  ];

  constructor() { }

  getEmployees(){
    return this.listEmployees.slice()
  }

  deleteEmployee(index: number){
    this.listEmployees.splice(index, 1);
  }

  addEmployee(employee: Employee){
    this.listEmployees.unshift(employee)
  }

  getEmployee(index: number){
    return this.listEmployees[index];
  }

  editEmployee(emplyee: Employee, index: number){
    this.listEmployees[index].name = emplyee.name;
    this.listEmployees[index].gender = emplyee.gender;
    this.listEmployees[index].dateEntry = emplyee.dateEntry;
    this.listEmployees[index].email = emplyee.email;
    this.listEmployees[index].phone = emplyee.phone;
    this.listEmployees[index].matrialStatus = emplyee.matrialStatus;
  }
}
