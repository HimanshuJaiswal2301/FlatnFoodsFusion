import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Flat } from '../model/Flat';
import { FlatService } from '../services/flat/flat.service';
import { ShareddataService } from '../services/sharedData/shared-data.service';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css'],
})
export class FlatComponent {
  @ViewChild('fileInput') fileInput: any;

  searchQuery: string = '';
  searchResults: Flat[] = [];
  flats: Flat[];
  allFlats: Flat[];
  public searchTerm: String = '';
  totalItem: any;
  constructor(private flatService: FlatService, private sharedDataService: ShareddataService) {}

  ngOnInit(): void {
    this.flatService.getFlats().subscribe((res) => {
      this.totalItem = res.length;
      this.flats = res;
      this.allFlats = this.flats;
    });
  }

  onSearch() {
    // console.log(this.searchQuery);
    if (this.searchQuery.trim() === '') {
      this.flats = this.allFlats;
    } else {
      this.flats = this.allFlats.filter((flat) =>
        flat.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    // console.log(this.flats);
    this.sharedDataService.setSearchResults(this.flats);
  }
}
