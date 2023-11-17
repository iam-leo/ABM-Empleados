import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent {
  genres = ['Masculino', 'Femenino', 'Otro'];
  maritalStatus = ['Soltero/a', 'Casado/a', 'Divorciado/a'];

  employeeForm: FormGroup;

  constructor( private fb: FormBuilder, private employeeService: EmployeeService, private router: Router, private toastr: ToastrService ){
    this.employeeForm = this.fb.group({
      name: [''],
      genre: ['Masculino'],
      dateEntry: ['dd/mm/aaaa'],
      email: [''],
      phone: [''],
      matrialStatus: ['Soltero/a']
    });
  }

  saveEmployee(){
    const employee: Employee = {
      name: this.employeeForm.get('name')?.value,
      gender: this.employeeForm.get('genre')?.value,
      phone: this.employeeForm.get('phone')?.value,
      email: this.employeeForm.get('email')?.value,
      dateEntry: this.employeeForm.get('dateEntry')?.value,
      matrialStatus: this.employeeForm.get('matrialStatus')?.value
    }

    // Add employee
    this.employeeService.addEmployee(employee);

    //Show success message
    this.toastr.success('Empleado/a agregado/a correctamente.', '¡Agregado!');
    this.router.navigate(['/'])

  }

}
