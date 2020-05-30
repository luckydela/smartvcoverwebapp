import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppService } from '../app.service';

@Component({
  selector: 'app-landinglogin',
  templateUrl: './landinglogin.component.html',
  styleUrls: ['./landinglogin.component.scss']
})
export class LandingloginComponent implements OnInit {
  formstate:any = 'Agent Login';
  formtitle:any = 'Customer Login';
  submitstate:any = ''
  user:any = {id:'',phone:'',pin:''}
  notification:any = {message:'', type:'', show: false, time: ''}
  formtype:any = 'login';
  gender:any = ['female','male'];
  idtypes:any = ['Voter id','NHIS','Passport'];
  form: FormGroup
  
  constructor(private router: Router, private appservice: AppService,private fb: FormBuilder) {
    // this.form = this.fb.group({
    //   first_name: ['',[Validators.required]],
    //   last_name: ['',[Validators.required]],
    //   email: ['',[Validators.required]],
    //   pin: ['',[Validators.required]],
    //   idNumber: ['',[Validators.required]],
    //   dob: ['',[Validators.required]],
    //   gender: ['',[Validators.required]],
    //   idtype: ['',[Validators.required]],
    //   res_address: ['',[Validators.required]], 
    //   postal_address:['',[Validators.required]]
    // })
    this.createform()
  }

  ngOnInit() {
  }
  createform() {
    this.form = this.fb.group({
      first_name: ['',[Validators.required]],
      last_name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      pin: ['',[Validators.required]],
      idNumber: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      idtype: ['',[Validators.required]],
      res_address: ['',[Validators.required]], 
      postal_address:['',[Validators.required]]
    })

    return this.form;
  }
  login(type:any){
  
    if (type === 'client') {
      if(this.user.phone === '' || this.user.pin === '') return this.notify('Sorry, Phone Number and Pin is required','danger',5000,true);
    } else {
      if(this.user.id === '' || this.user.pin === '') return this.notify('Sorry, Agent ID and Pin is required','danger',5000,true);
    }

    this.submitstate = 'form-submit'
    this.appservice.submitrequest(this.user,type)
    .subscribe(rd => {
      this.submitstate = 'form-after-submit';
      let out = rd;
      if(out['responseCode'] === 'E05') return this.notify(out['responseMessage'],'danger',5000,true);
      
      this.router.navigate(['/dashboard'],{state: {data: out}})
    },err => {
      this.submitstate = 'form-after-submit';
      this.notify(err.name+'. Request failed','danger',5000,true);
    })
  }
  makerequest(type:any){

    if(!this.form.valid) return this.notify('All form fields are required','danger',2000,true);

    this.submitstate = 'form-submit';
    this.appservice.submitrequest(this.form.value,type)
    .subscribe(rd => {
      this.submitstate = 'form-after-submit';
      let out = rd;
      if(out['responseCode'] != '000') return this.notify(out['responseMessage'],'danger',5000,true);

      this.notify(out['responseMessage'],'success',5000,true);
      this.createform()
      setTimeout(() => {
        this.formtype = 'login'
      },2000)
    },err => {
      this.submitstate = 'form-after-submit';
      this.notify(err.name+'. Request failed','danger',5000,true);
    })
  }
  route(path:any){
    this.router.navigate([path])
  }
  changeform(name:any){
    this.formtype = name;
  }
  show(state:any){
    this.formstate = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
    this.formtitle = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
  }

  notify(msg:any,type:any,time:any,show:any){
    this.notification = {message:msg, type:type, show: show}
      setTimeout(()=>{
        this.notification.show = false
      },time)
  }
  closenotification($event:any){
    this.notification.show = $event
  }
}