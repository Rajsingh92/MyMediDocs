import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: EmployeeService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      EmployeeName: ['', Validators.required ],
      Sex: ['', Validators.required ],
      Salary: ['', Validators.required ],
      Type: ['', Validators.required ],
      Contact: ['', Validators.required ],
      Email: ['', Validators.required ],
      Address: ['', Validators.required ],
      City: ['', Validators.required ]
    });
  }

  addEmployee(EmployeeName, Sex, Salary,Type,Contact,Email,Address,City) {
    this.ps.addEmployee(EmployeeName, Sex, Salary,Type,Contact,Email,Address,City);
  }

  ngOnInit() {
  }


}
