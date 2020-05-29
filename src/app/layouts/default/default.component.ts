import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMER_MENUS, AGENT_MENUS } from '../../data.model';
import { AppService } from '../../app.service';



@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  menus:any;
  profile:any={}
  profiledata:any={};
  constructor(private router: Router, private appservice: AppService ) { }

  ngOnInit() {
    const { state } = history

    if(state['data']){
      this.profile = state['data']['profile'][0];
      this.storeuserdata(this.profile) 
    } else {
      if(this.appservice.retrieveuserdata()){
        this.profile = this.appservice.retrieveuserdata()
        this.router.navigate(['/dashboard'])
      } else {
        this.router.navigate(['/'])
      }
    }

    
    if(this.profile['id']){
      this.profiledata = {id:this.profile['id'],firstname:this.profile['firstName'],lastname:this.profile['lastName']};
      this.menus = AGENT_MENUS;
    } else if(this.profile['client_id']) {
      this.profiledata = {id:this.profile['client_id'],firstname:this.profile['first_name'],lastname:this.profile['last_name']};
      this.menus = CUSTOMER_MENUS;
    }
  }

  route(path:any){
    this.router.navigate([path])
  }
  storeuserdata(userdata:any){
    localStorage.setItem('userdata',JSON.stringify(userdata))
  }

  motorinsurance(){
    this.router.navigate(['/motorinsurance'])
  }

}
