import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  manager = 'http://localhost:3000/manager';
  

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

  addNurse(Name,Qualification,PrevExperience,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender){
    console.log(Name,Qualification,PrevExperience,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender);
    const obj ={
      Name,
      Qualification,
      PrevExperience,
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

    this.http.post(`${this.manager}/addNurse`, obj)
        .subscribe(res => console.log('Done'));
  }

  addRec(Name,Qualification,PrevExperience,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender){
    console.log(Name,Qualification,PrevExperience,Salary,Email,AlternateEmail,Contact,AlternateContact,Address,City,State,Gender);
    const obj ={
      Name,
      Qualification,
      PrevExperience,
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

    this.http.post(`${this.manager}/addRec`, obj)
        .subscribe(res => console.log('Done'));
  }

  getComplaints(){
    return this
           .http
           .get(`${this.manager}/getComplaints`);
  }

  getDoctors(){
    return this
           .http
           .get(`${this.manager}/getDoctors`);
  }

  getMStaff(){
    return this
           .http
           .get(`${this.manager}/getMStaff`);
  }

  getNurse(){
    return this
           .http
           .get(`${this.manager}/getNurse`);
  }

  getRec(){
    return this
           .http
           .get(`${this.manager}/getRec`);
  }

  deleteDoctor(id) {
    return this
              .http
              .get(`${this.manager}/deleteDoctor/${id}`);
  }

 

  editDoctor(id) {
    return this
            .http
            .get(`${this.manager}/editDoctor/${id}`);
  }

  updateDoctor(EmployeeName, Sex, Salary,Type,Contact,Email,Address,City, id) {
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
      .post(`${this.manager}/updateDoctor/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

 
}
