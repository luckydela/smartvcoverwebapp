import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { AppService } from '../../app.service';



@Component({
  selector: 'app-motorinsurance',
  templateUrl: './motorinsurance.component.html',
  styleUrls: ['./motorinsurance.component.scss']
})
export class MotorinsuranceComponent implements OnInit {
  form: FormGroup
  constructor(private router: Router, private appservice: AppService) {

    this.form = new FormGroup({
      customer_first_name: new FormControl(''),
      customer_other_names: new FormControl(''),
      customer_last_name: new FormControl(''),
      customer_phone: new FormControl(''),
      customer_email: new FormControl(''),
      cover_type_code: new FormControl(''),
      schedule_code: new FormControl(''),
      year_of_manufacture: new FormControl(''),
      duration: new FormControl(''), 
      make:new FormControl(''),
      seats:new FormControl(''),
      model:new FormControl(''),
      cubic_capacity:new FormControl(''),
      mileage:new FormControl(''),
      vehicle_registration:new FormControl(''),
      chasis_number: new FormControl(''),
      body_type_code:new FormControl(''),
      cost_of_car:new FormControl(''),

    })
  }

  ngOnInit() {
  }
  route(path:any){
    this.router.navigate([path])
  }

  makerequest(){

   console.log(this.form.value);
   
    this.appservice.submitrequest(this.form.value).subscribe(returneddata => {
      console.log(returneddata);
      
    })
  }

}
