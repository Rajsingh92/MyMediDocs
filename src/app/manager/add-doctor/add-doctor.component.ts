import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ManagerService } from 'src/app/shared/services/manager.service';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

 
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ManagerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required ],
      Qualification: ['', Validators.required ],
      Type: ['', Validators.required ],
      PrevExperience: ['', Validators.required ],
      Salary: ['', Validators.required ],
      Address: ['', Validators.required ],
      City: ['', Validators.required ],
      State: ['', Validators.required ],
      Email: ['', Validators.required ],
      AlternateEmail: ['', Validators.required ],
      Contact: ['', Validators.required ],
      AlternateContact: ['', Validators.required ],
      Gender: ['', Validators.required ]
    });
  }

  addEmployee(Name,Qualification,Type,PrevExperience,Salary,Address,City,State,Email,AlternateEmail,Contact,AlternateContact,Gender) {
    this.ps.addDoctor(Name,Qualification,Type,PrevExperience,Salary,Address,City,State,Email,AlternateEmail,Contact,AlternateContact,Gender);
  }

  ngOnInit() {
  }

}
