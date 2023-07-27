import { Component, OnInit } from '@angular/core';
import { FlatService } from '../services/flat/flat.service';
import { Flat } from '../model/Flat';
import { HttpErrorResponse } from '@angular/common/http';
import { ShareddataService } from '../services/sharedData/shared-data.service';


@Component({
  selector: 'app-subflat',
  templateUrl: './subflat.component.html',
  styleUrls: ['./subflat.component.css'],
})
export class SubflatComponent implements OnInit {
  onResetFilter() {
    // Reset the startPrice and endPrice to default values
    this.startPrice = null;
    this.endPrice = null;

    // Reload the page to /city
    window.location.href = '/city';
  }
  constructor(private _flat: FlatService, private sharedDataService: ShareddataService) {} // Inject Lightbox service

  flats: Flat[] = [];
  allFlats: Flat[] = [];
  flatData: any = {

  }; // Variable to store new form data
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
  userDetails: any;
  userId: number;

  ngOnInit(): void {
    this.getFlats();
    this.sharedDataService.userDetailsObservable.subscribe((res) => {
      this.userDetails = res;
      this.userId = this.userDetails[0]?.id;
    });
    this.sharedDataService.searchResultsObservable.subscribe(
      (res) => {
        this.flats = res;
        console.log(this.flats);
        
      }
    )
  }

  onFlatByUserIdFilter() {
    this._flat.flatsByUserId(this.userId).subscribe(
      (res) => {
        console.log(res);

        this.flats = res;
        this.flats.reverse();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getFlats() {
    this._flat.getFlats().subscribe(
      (res) => {
        this.flats = res.map((flat: Flat) => ({
          ...flat,
          interested: false,
          interestedCount: 0,
        }));
        this.allFlats = this.flats;
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

  onCustomFilterSubmit(startPrice: number, endPrice: number) {
    this._flat.customFilter(startPrice, endPrice).subscribe(
      (res) => {
        this.flats = res;
        this.flats.reverse();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
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

  // Toggle the interest status and update the interest count
  onHeartButtonClick(flatData: Flat) {
    flatData.interested = !flatData.interested;
  flatData.interestedCount += flatData.interested ? 1 : -1;

  //  // Update the backend with the new interestedCount
  //  this._flat.updateFlatInterest(flatData).subscribe(
  //   (data) => {
  //     console.log('Interest updated successfully', data);
  //   },
  //   (error) => {
  //     console.log('Error updating interest', error);
  //   }
  // );
  }
}
