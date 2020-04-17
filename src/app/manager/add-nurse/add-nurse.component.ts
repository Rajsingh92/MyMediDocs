import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-add-nurse',
  templateUrl: './add-nurse.component.html',
  styleUrls: ['./add-nurse.component.scss']
})
export class AddNurseComponent implements OnInit {

angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ManagerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required ],
      Qualification: ['', Validators.required ],
      PrevExperience: ['', Validators.required ],
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

  addEmployee(Name,Qualification,PrevExperience,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State) {
    this.ps.addNurse(Name,Qualification,PrevExperience,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State);
  }

  ngOnInit() {
  }

}
