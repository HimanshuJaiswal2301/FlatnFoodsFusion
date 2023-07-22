import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Flat } from '../model/Flat';
import { FlatService } from '../services/flat/flat.service';


@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent 
   {
    @ViewChild('fileInput') fileInput: any;
    
 
}
