import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  formtype:any = 'login'

  loader:boolean=false;
  
  constructor(private router: Router, private appservice: AppService) { }

  ngOnInit() {
  }

  login(type:any){
    this.loader = true
    
    if (type === 'client') {
      if(this.user.phone === '' || this.user.pin === '') return this.notify('Sorry, Phone Number and Pin is required','danger',5000,true);
    } else {
      if(this.user.id === '' || this.user.pin === '') return this.notify('Sorry, Agent ID and Pin is required','danger',5000,true);
    }

    this.submitstate = 'form-submit'
    this.appservice.submitrequest(this.user,type)
    .subscribe(rd => {
      console.log(rd);
      
      this.submitstate = 'form-after-submit';
      let out = rd;
      if(out['responseCode'] === 'E05') return this.notify(out['responseMessage'],'danger',5000,true);
      
      this.router.navigate(['/dashboard'],{state: {data: out}})
      this.loader = false;
    },err => {
      this.submitstate = 'form-after-submit';
      this.notify(err.name+'. Request failed','danger',5000,true);
    })
  }

  createAccount(){
    this.loader = true;
    this.router.navigate(['/createaccount'])
    this.loader = false;

  }

  route(path:any){
    this.loader = true;
    this.router.navigate([path]);
  }
  changeform(name:any){
    this.formtype = name;
  }
  show(state:any){
    this.loader = true;
    this.formstate = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
    this.formtitle = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
    this.loader = false;

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
