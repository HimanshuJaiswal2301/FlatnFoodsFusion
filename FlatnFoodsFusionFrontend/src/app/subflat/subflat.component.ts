import { Component, OnInit } from '@angular/core';
import { FlatService } from '../services/flat/flat.service';
import { Flat } from '../model/Flat';
import { HttpErrorResponse } from '@angular/common/http';
import { Lightbox } from 'ngx-lightbox'; // Import Lightbox from ngx-lightbox

 // Import Lightbox from ngx-lightbox

@Component({
  selector: 'app-subflat',
  templateUrl: './subflat.component.html',
  styleUrls: ['./subflat.component.css']
})
export class SubflatComponent implements OnInit {
  constructor(private _flat: FlatService) {} // Inject Lightbox service

  flats: Flat[] = [];
  flatData: any = {}; // Variable to store new form data
  isModalOpen: boolean = false;
  zoomedImageUrl: string = '';

  getImageUrl(imageFile: File): string {
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = (event: any) => {
        return event.target.result;
      };
    }
    return ''; // Return an empty string if the imageFile is null or undefined
  }

  startPrice: number;
  endPrice: number;
  priceRange: number[] = [0, 100000];
  ngOnInit(): void {
    this.getFlats();
  }

  getFlats() {
    this._flat.getFlats().subscribe(
      (res) => {
        this.flats = res;
        this.flats.reverse();
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
    // this.flats.push(this.flatData);
    this.flats.unshift(this.flatData);
    this.flatData = {}; // Clear the flatData object for a fresh form submission
  }

  onCustomFilterSubmit(startPrice: number, endPrice: number){
    this._flat.customFilter(startPrice, endPrice).subscribe(
      (res) => {
        this.flats = res;
        this.flats.reverse();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        
      }
    )
  }

  openImageModal(imageUrl: string) {
    this.isModalOpen = true;
    this.zoomedImageUrl = imageUrl;
  }

  // Method to close the image modal
  closeImageModal() {
    this.isModalOpen = false;
  }

  showPreviousImage(): void {
    // Logic to show the previous image in the zoomed image gallery
    // Update this.zoomedImageUrl to the URL of the previous image
    // You need to implement this logic based on your specific data structure.
  }

  showNextImage(): void {
    // Logic to show the next image in the zoomed image gallery
    // Update this.zoomedImageUrl to the URL of the next image
    // You need to implement this logic based on your specific data structure.
  }
  
}
