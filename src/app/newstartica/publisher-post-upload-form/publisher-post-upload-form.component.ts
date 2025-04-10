import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArticleReaderComponent } from '../article-reader/article-reader.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-publisher-post-upload-form',
  templateUrl: './publisher-post-upload-form.component.html',
  styleUrls: ['./publisher-post-upload-form.component.css']
})
export class PublisherPostUploadFormComponent implements OnInit {
  previewUrl: any;
  selectedFile: File | null = null;
  publisherForm: FormGroup<any> | undefined;
  myForm!: FormGroup;
  categories: string[] = ["sports", "adult", "space", "entertainment", "politics", "market"];

  constructor(private fb: FormBuilder,
    private modal: MatDialog,
    private http: HttpClient) 
  {

  }


  ngOnInit(): void {
    
      this.myForm = this.fb.group({
        category: [''],
        title: [''],
        content: [''],
        img: [null]
      });
    
  }
  PublishResponse: any;
  formSubmit() {
    console.log("UT form submit: ", this.myForm.value)
    // To send file data via api
    if (this.myForm.valid && this.selectedFile) 
    {
      const formdata = new FormData()
      formdata.append('title',this.myForm.get('title')?.value);
      formdata.append('category',this.myForm.get('category')?.value);
      formdata.append('content',this.myForm.get('content')?.value);
      formdata.append('image',this.selectedFile);
      this.http.post('http://127.0.0.1:8000/api/v1/news',formdata,
        {
          headers:{
            'enctype': 'multipart/form-data'
         }
        }
    ).subscribe((response)=>{
      this.PublishResponse = response
      console.log("UT: Publish Article Response: ",response)
    })
    }


  }


  //submit validation
  canValidate:boolean = false;
  openConfirmModal(){
    this.modal.open(ArticleReaderComponent,{

    })
  }
  
  onImageSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;

      // Show the preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


}
