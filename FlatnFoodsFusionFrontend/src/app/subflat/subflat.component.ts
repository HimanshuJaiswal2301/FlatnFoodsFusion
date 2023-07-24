import { Component, OnInit } from '@angular/core';
import { FlatService } from '../services/flat/flat.service';
import { Flat } from '../model/Flat';
import { Lightbox } from 'ngx-lightbox'; // Import Lightbox from ngx-lightbox

@Component({
  selector: 'app-subflat',
  templateUrl: './subflat.component.html',
  styleUrls: ['./subflat.component.css']
})
export class SubflatComponent implements OnInit {
  constructor(private _flat: FlatService, private lightbox: Lightbox) {} // Inject Lightbox service

  flats: Flat[] = [];
  flatData: any = {}; // Variable to store new form data

  ngOnInit(): void {
    this.getFlats();
  }

  getFlats() {
    this._flat.getFlats().subscribe(
      (res) => {
        this.flats = res;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Method to add new entry when form is submitted
  onSubmit() {
    // Assuming you are using a form with [(ngModel)]="flatData" for input fields
    this.flats.push(this.flatData);
    this.flatData = {}; // Clear the flatData object for a fresh form submission
  }

  // Method to open the image modal when an image is clicked
  // openImageModal(imageUrl: string) {
  //   const album = [{ src: imageUrl, caption: '', thumb: '' }];
  //   this.lightbox.open(album, 0);
  // }
}
