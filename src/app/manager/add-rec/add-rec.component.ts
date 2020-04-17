import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-add-rec',
  templateUrl: './add-rec.component.html',
  styleUrls: ['./add-rec.component.scss']
})
export class AddRecComponent implements OnInit {

angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ManagerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required ],
      Salary: ['', Validators.required ],
      Address: ['', Validators.required ],
      City: ['', Validators.required ],
      State: ['', Validators.required ],
      Email: ['', Validators.required ],
      AlternateEmail: ['', Validators.required ],
      Contact: ['', Validators.required ],
      AlternateContact: ['', Validators.required ],
    });
  }

  addEmployee(Name,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender) {
    this.ps.addRec(Name,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender);
  }

  ngOnInit() {
  }
}
