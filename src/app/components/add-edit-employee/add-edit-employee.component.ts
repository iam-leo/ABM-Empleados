import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent {
  genres = ['Masculino', 'Femenino', 'Otro'];
  maritalStatus = ['Soltero', 'Casado', 'Divorciado'];

}
