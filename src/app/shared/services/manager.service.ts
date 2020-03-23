import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  manager = 'http://localhost:3000/manager';
  mstaff = 'http://localhost:3000/mstaff';
  nurse = 'http://localhost:3000/nurse';
  rec = 'http://localhost:3000.rec';

  constructor(private http: HttpClient) { }

  

  addDoctor(Name,Qualification,Type,PrevExperience,Salary,Address,City,State,Email,AlternateEmail,Contact,AlternateContact,Gender){
    console.log(Name,Qualification,Type,PrevExperience,Salary,Address,City,State,Email,AlternateEmail,Contact,AlternateContact,Gender);
    const obj ={
      Name,
      Qualification,
      Type,
      PrevExperience,
      Salary,Address,
      City,
      State,
      Email,
      AlternateEmail,
      Contact,
      AlternateContact,
      Gender
    }

    this.http.post(`${this.manager}/addDoctor`, obj)
        .subscribe(res => console.log('Done'));
  }

  addMStaff(Name,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender){
    console.log(Name,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender);
    const obj ={
      Name,
      Salary,
      Email,
      AlternateEmail,
      Contact,
      AlternateContact,
      Address,
      City,
      State,
      Gender
    }

    this.http.post(`${this.manager}/addMStaff`, obj)
        .subscribe(res => console.log('Done'));
  }

 

  getmanager() {
    return this
           .http
           .get(`${this.manager}`);
  }

  editEmployee(id) {
    return this
            .http
            .get(`${this.manager}/edit/${id}`);
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
      .post(`${this.manager}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteEmployee(id) {
    return this
              .http
              .get(`${this.manager}/delete/${id}`);
  }
}
