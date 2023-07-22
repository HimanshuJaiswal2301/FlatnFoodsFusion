import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlatService } from 'src/app/services/flat/flat.service';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css']
})
export class AddFlatComponent implements OnInit{
  
  flatData={
    description:'',
    address:'',
    contact:null,
    price:null,
    type:'',
    image:'',
    food:''}


  

  constructor(private _flat:FlatService,private toastr:ToastrService,private router:Router){}

  ngOnInit(): void {
    
  }

  onSubmit( ){
    this._flat.postFlat(this.flatData).subscribe(
      (data:any) => {
        this.flatData={
          description:'',
          address:'',
          contact:null,
          price:null,
          type:'',
          image:'',
          food:''}
        console.log(data);
        this.router.navigate(['/city']);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  

  
  }
