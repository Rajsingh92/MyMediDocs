import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DrugService } from 'src/app/shared/services/drug.service';

@Component({
  selector: 'app-add-druginfo',
  templateUrl: './add-druginfo.component.html',
  styleUrls: ['./add-druginfo.component.scss']
})
export class AddDruginfoComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: DrugService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      DrugName: ['', Validators.required ],
      DrugDescription: ['', Validators.required ]
    });
  }

  addDrug(DrugName, DrugDescription) {
    this.ps.addDrug(DrugName, DrugDescription);
  }

  ngOnInit() {
  }

}
