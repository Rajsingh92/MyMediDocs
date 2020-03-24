import { Component, OnInit } from '@angular/core';
import Doctor from 'src/app/shared/models/Doctor';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  doctors: Doctor[];
  constructor(private ps: ManagerService) { }

  ngOnInit() {
    this.ps
      .getDoctors()
      .subscribe((data: Doctor[]) => {
        this.doctors = data;
    });
  }


  deleteDoctor(id) {
    this.ps.deleteDoctor(id).subscribe(res => {
      this.doctors.splice(id, 1);
    });
  }

}
