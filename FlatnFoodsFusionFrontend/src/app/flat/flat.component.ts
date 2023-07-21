import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Flat } from '../model/Flat';
import { FlatService } from '../services/flat/flat.service';


@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit,
  AfterViewInit {
    @ViewChild('fileInput') fileInput: any;
    
    title = 'FlatnFoodsFusion';
    flat:Flat[];
    flatToDisplay:Flat[];

  
    flatForm: FormGroup;

  constructor(private fb: FormBuilder ,private flatService:FlatService) {
    this.flatForm=fb.group({});
    this.flat=[];
    this.flatToDisplay=this.flat;
  }
  
  ngOnInit(): void {
    this.flatForm= this.fb.group({
      FlatDescription: this.fb.control(''),
      Price: this.fb.control(''),
      Address: this.fb.control(''),
      Contact: this.fb.control(''),
      Type: this.fb.control(''),
      FoodOptionsNearby: this.fb.control(''),
    });
    this.flatService.getFlats().subscribe(res=> {
      console.log(res)
    })
  }
  
    ngAfterViewInit(): void {
      // this.buttontemp.nativeElement.click();
    }  
    public get Description():FormControl{
       return this.flatForm.get('description') as FormControl;
    }
    public get Address():FormControl{
      return this.flatForm.get('address') as FormControl;
   }
   public get Contact():FormControl{
    return this.flatForm.get('contact') as FormControl;
 }
 public get Price():FormControl{
  return this.flatForm.get('price') as FormControl;
}
// public get Type():FormControl{
//   return this.flatForm.get('type') as FormControl;
// }
public get Image():FormControl{
  return this.flatForm.get('image') as FormControl;
}
public get Food():FormControl{
  return this.flatForm.get('food') as FormControl;
}


clearForm(){
  this.Address.setValue('');
  this.Description.setValue('');
  this.Contact.setValue('');
  this.Price.setValue('');
  this.Contact.setValue('');
  // this.Type.setValue('');
  this.Image.setValue('');
  this.Food.setValue('');
  // this.fileInput.nativeElement.value='';
}
addFlat(){
  let flat: Flat={
    address: this.Address.value,
    contact: this.Contact.value,
    description: this.Description.value,
    price: this.Price.value,
    // type: this.Type.value,
    food: this.Food.value,
    id: 0,
    image:this.Image.value,
  }
  this.flatService.postFlat(flat).subscribe((data:any)=>{
    this.flat.unshift(data);
    this.clearForm();
  })
}

}
