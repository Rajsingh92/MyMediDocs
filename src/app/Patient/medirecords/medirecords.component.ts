import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-medirecords',
  templateUrl: './medirecords.component.html',
  styleUrls: ['./medirecords.component.scss']
})

export class MedirecordsComponent implements OnInit {

  uploadedFiles: Array < File > ;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  fileChange(element) {
      this.uploadedFiles = element.target.files;
  }

  upload() {
      let formData = new FormData();
      for (var i = 0; i < this.uploadedFiles.length; i++) {
          formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      }
      this.http.post('http://localhost:3000//api/upload', formData)
          .subscribe((response) => {
              console.log('response received is ', response);
          })
  }
}
