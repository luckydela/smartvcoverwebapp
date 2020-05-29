import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   profiledata;


  constructor(private router:Router, private service: AppService) { }


  ngOnInit() {
  this.profiledata=JSON.parse(localStorage.getItem('userdata'));

    console.log(history.state);
    
  
  }

  quote(){
    this.router.navigate(['/motorinsurance'])
  }
  verify(){
    this.router.navigate(['/viewquote'])
  }
  pay(){
    this.router.navigate(['/payments'])
  }
  transact(){
    this.router.navigate(['/transactions'])
  }

}
