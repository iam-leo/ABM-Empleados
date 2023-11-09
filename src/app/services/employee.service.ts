import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listEmployees: Employee[] = [
    { name: 'Leo', gender: 'masculino', phone: 1122334455, email: 'leo@leo.com', dateEntry: new Date(), matrialStatus: 'soltero' },
    { name: 'Leo2', gender: 'masculino', phone: 1122334455, email: 'leo@leo.com', dateEntry: new Date(), matrialStatus: 'soltero' }
  ];

  constructor() { }

  getEmployees(){
    return this.listEmployees.slice()
  }

  deleteEmployee(index: number){
    this.listEmployees.splice(index, 1);
  }
}
