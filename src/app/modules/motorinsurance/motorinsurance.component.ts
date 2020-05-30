import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppService } from '../../app.service';



@Component({
  selector: 'app-motorinsurance',
  templateUrl: './motorinsurance.component.html',
  styleUrls: ['./motorinsurance.component.scss']
})
export class MotorinsuranceComponent implements OnInit {
  form: FormGroup
  schedules:any;
  bodytypes:any;
  covertypes:any=[{name:'Third Pary',code:1},{name:'Comprehensive',code:2},{name: 'Third Party Fire & Theft', code:3}];
  makes:any;
  years:any = this.appservice.numCombo(1951,2020,'name','code');
  durations:any=[{name:'One Year',code:1},{name:'Short Rate',code:2},{name: 'Prorata', code:3}];;
  notification:any = {message:'', type:'', show: false, time: ''}

  constructor(private router: Router, private appservice: AppService,private fb: FormBuilder) {

    this.form = this.fb.group({
      customer_first_name: [''],
      customer_other_names: [''],
      customer_last_name: [''],
      customer_phone: [''],
      customer_email: [''],
      cover_type_code: [''],
      schedule_code: [''],
      year_of_manufacture: [''],
      duration: [''], 
      make:[''],
      seats:[''],
      model:[''],
      cubic_capacity:[''],
      mileage:[''],
      vehicle_registration:[''],
      chasis_number: [''],
      body_type_code:[''],
      cost_of_car:['']
    })
  }

  ngOnInit() {
    this.appservice.getcombodata()
    .subscribe(rd => {
      this.schedules = rd[0];
      this.bodytypes = rd[1];     
    },err => console.log(err))
    

  }

  onChangeYear(e:any) {
    this.appservice.getmakecombodata(e.target.value)
    .subscribe(rd => {
      this.makes = rd
    },err =>{
      this.notification = {message:err.message, type:'danger', show: true}
      setTimeout(()=>{
        this.notification.show = false
      },10000)
    })
    
  }
  route(path:any){
    this.router.navigate([path])
  }

  makerequest(type:any){
       
    this.appservice.submitrequest(this.form.value,type).subscribe(returneddata => {
      console.log(returneddata);
      
    })
  }

  closenotification($event:any){
    this.notification.show = $event
  }

}
