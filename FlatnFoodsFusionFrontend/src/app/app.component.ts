import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit,
AfterViewInit {
  @ViewChild('tempButton') buttontemp: any;
  title = 'FlatnFoodsFusion';

  flatForm: FormGroup | undefined;
constructor(private fb: FormBuilder) {
}

ngOnInit(): void {
  this.flatForm= this.fb.group({
    FlatDescription: this.fb.control('dfd'),
    Price: this.fb.control(''),
    Address: this.fb.control(''),
    Contact: this.fb.control(''),
    Type: this.fb.control(''),
  });
}

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click();
  }  
}