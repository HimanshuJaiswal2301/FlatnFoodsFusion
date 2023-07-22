import { Component, OnInit } from '@angular/core';
import { FlatService } from '../services/flat/flat.service';
import { Flat } from '../model/Flat';

@Component({
  selector: 'app-subflat',
  templateUrl: './subflat.component.html',
  styleUrls: ['./subflat.component.css']
})
export class SubflatComponent implements OnInit{
  constructor(private _flat: FlatService)
  {}
  flats:Flat[];
  
  ngOnInit(): void {
    this.getFlats(); 
  }
  getFlats(){
    this._flat.getFlats().subscribe(
      (res)=>{
        this.flats=res
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
