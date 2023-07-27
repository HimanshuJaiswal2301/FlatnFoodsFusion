import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/model/Flat';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FlatService } from 'src/app/services/flat/flat.service';
import { ShareddataService } from 'src/app/services/sharedData/shared-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  flats: Flat[];
  userDetails: any;
  userId: number;
  constructor(
    private flatService: FlatService,
    private authService: AuthService,
    private sharedDataService: ShareddataService
  ) {}
  ngOnInit(): void {
    this.sharedDataService.userDetailsObservable.subscribe((res) => {
      this.userDetails = res;
      this.userId = this.userDetails[0]?.id;
    });
  }
  // userDetails = JSON.parse(localStorage.getItem('userDetails'));

  onFlatByUserIdFilter() {
    this.flatService.flatsByUserId(this.userId).subscribe(
      (res) => {
        console.log(res);
        this.sharedDataService.setSearchResults(res);
        this.flats = res;
        this.flats.reverse();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  onSearch(cityName: string){
    this.flatService.flatsByCityName(cityName).subscribe(
      (res) => {
        this.flats = res;
        this.sharedDataService.setSearchResults(res);
      }
    )
  }
}
