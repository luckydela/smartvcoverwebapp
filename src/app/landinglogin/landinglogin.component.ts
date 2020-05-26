import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landinglogin',
  templateUrl: './landinglogin.component.html',
  styleUrls: ['./landinglogin.component.scss']
})
export class LandingloginComponent implements OnInit {
  formstate:any = 'Agent Login';
  formtitle:any = 'Customer Login'
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/dashboard'])
  }
  route(path:any){
    this.router.navigate([path])
  }
  show(state:any){
    this.formstate = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
    this.formtitle = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
  }
}
