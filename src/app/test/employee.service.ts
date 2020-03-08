import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  addEmployee(EmployeeName, Sex, Salary,Type,Contact,Email,Address,City) {
    console.log(EmployeeName, Sex, Salary,Type,Contact,Email,Address,City);
    const obj = {
      EmployeeName, 
      Sex, 
      Salary,
      Type,
      Contact,
      Email,
      Address,
      City
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getEmployees() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editEmployee(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateEmployee(EmployeeName, Sex, Salary,Type,Contact,Email,Address,City, id) {
    const obj = {
      EmployeeName, 
      Sex, 
      Salary,
      Type,
      Contact,
      Email,
      Address,
      City
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteEmployee(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
