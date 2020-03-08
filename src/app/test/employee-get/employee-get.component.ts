import { Component, OnInit } from '@angular/core';
import Employee from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.scss']
})
export class EmployeeGetComponent implements OnInit {

  employees: Employee[];
  constructor(private ps: EmployeeService) { }

  ngOnInit() {
    this.ps
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
    });
  }


  deleteEmployee(id) {
    this.ps.deleteEmployee(id).subscribe(res => {
      this.employees.splice(id, 1);
    });
  }

}
