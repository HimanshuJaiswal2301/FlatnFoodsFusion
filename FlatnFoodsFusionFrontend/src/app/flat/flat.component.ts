import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Flat } from '../model/Flat';
import { FlatService } from '../services/flat/flat.service';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css'],
})
export class FlatComponent {
  @ViewChild('fileInput') fileInput: any;

  searchQuery: string = '';
  searchResults: Flat[] = [];
  public searchTerm: String = '';
  totalItem: any;
  constructor(private flatService: FlatService) {}

  ngOnInit(): void {
    this.flatService.getFlats().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  // search(event: any) {
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.flatService.search.next(this.searchTerm);
  // }
}
