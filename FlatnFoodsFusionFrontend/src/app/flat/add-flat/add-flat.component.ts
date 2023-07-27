import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlatService } from 'src/app/services/flat/flat.service';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css'],
})
export class AddFlatComponent implements OnInit {
  userDetails = JSON.parse(localStorage.getItem('userDetails'));
  flatData = {
    userId : this.userDetails[0].id,
    description: '',
    address: '',
    contact: '',
    price: null,
    type: '',
    image: '',
    food: '',
    posted: '',
  };
  flats: any;
  selectedImage: File;
  selectedImageDataURL: string;

  constructor(
    private _flat: FlatService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onImageSelected(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.selectedImage = files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageDataURL = e.target.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  onSubmit() {
    this.flatData.posted = new Date().toISOString();
    this.flatData.image = this.selectedImageDataURL ? this.selectedImageDataURL : '';
    this._flat.postFlat(this.flatData).subscribe(
      (data: any) => {
        this.flatData = {
          userId: this.userDetails[0].id,
          description: '',
          address: '',
          contact: '',
          price: null,
          type: '',
          image: '',
          food: '',
          posted: '',
        };

        console.log(data);
        this.router.navigate(['/city']);
        this.toastr.success('Successfully Added the flat!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
