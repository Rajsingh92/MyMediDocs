import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-add-mstaff',
  templateUrl: './add-mstaff.component.html',
  styleUrls: ['./add-mstaff.component.scss']
})
export class AddMstaffComponent implements OnInit {

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
      Gender: ['', Validators.required ]
      
    });
  }

  addEmployee(Name,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender) {
    this.ps.addMStaff(Name,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender);
  }

  ngOnInit() {
  }

}
