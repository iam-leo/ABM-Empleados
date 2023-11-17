import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent {
  genres = ['Masculino', 'Femenino', 'Otro'];
  maritalStatus = ['Soltero', 'Casado', 'Divorciado'];

  employeeForm: FormGroup;

  constructor( private fb: FormBuilder ){
    this.employeeForm = this.fb.group({
      name: [''],
      genre: ['Masculino'],
      dateEntry: ['dd/mm/aaaa'],
      email: [''],
      phone: [''],
      matrialStatus: ['Soltero']
    });
  }

}
