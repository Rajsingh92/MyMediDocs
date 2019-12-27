import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  uri = 'http://localhost:3000/drug';

  constructor(private http: HttpClient) { }

  addDrug(DrugName, DrugDescription) {
    console.log(DrugName, DrugDescription);
    const obj = {
      DrugName,
      DrugDescription
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getDrugs() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editDrug(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateDrug(DrugName, DrugDescription, id) {
    const obj = {
      DrugName,
      DrugDescription
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteDrug(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
