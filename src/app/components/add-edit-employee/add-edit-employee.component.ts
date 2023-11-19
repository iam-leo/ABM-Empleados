import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  genres = ['Masculino', 'Femenino', 'Otro'];
  maritalStatus = ['Soltero/a', 'Casado/a', 'Divorciado/a'];
  idEmployee: any;
  action = 'crear';

  employeeForm: FormGroup;

  constructor( private fb: FormBuilder, private employeeService: EmployeeService, private router: Router, aRoute: ActivatedRoute, private toastr: ToastrService ){
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      genre: ['Masculino', Validators.required],
      dateEntry: ['dd/mm/aaaa', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      matrialStatus: ['Soltero/a', Validators.required]
    });

    this.idEmployee = aRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    if(this.idEmployee !== undefined ){
      this.action = 'editar';
      this.editEmployee();
    }

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

    if( this.idEmployee === undefined ){
      // Add employee
      this.employeeService.addEmployee(employee);

      //Show success message
      this.toastr.success('Empleado/a agregado/a correctamente.', '¡Agregado!');
    }else{
      // Edit employee
      this.employeeService.editEmployee(employee, this.idEmployee);

      //Show success message
      this.toastr.success('Empleado/a actualizado correctamente.', '¡Actualizado!');
    }

    // Redirigir al home
    this.router.navigate(['/']);
  }

  editEmployee(){
    const employee: Employee = this.employeeService.getEmployee(this.idEmployee);
    this.employeeForm.patchValue({
      name: employee.name,
      gender: employee.gender,
      dateEntry: employee.dateEntry,
      email: employee.email,
      phone: employee.phone,
      matrialStatus: employee.matrialStatus
    });
  }

}
